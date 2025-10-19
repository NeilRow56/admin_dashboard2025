'use server'

import { db } from '@/db'
import { subscriptionsTable } from '@/db/schema'

import { count, sql, asc, and, or, eq, isNull } from 'drizzle-orm'

export type ActionStatus = 'success' | 'error' | 'warning' | 'default'

export async function getSubscriptionCount() {
  const data = await db
    .select({
      count: count()
    })
    .from(subscriptionsTable)

  return data[0].count
}

export async function getSubscriptionBreakdown() {
  const breakdown = await db
    .select({
      plan: subscriptionsTable.plan,
      total: sql<number>`count(*)`
    })
    .from(subscriptionsTable)
    .where(
      and(
        or(
          eq(subscriptionsTable.plan, 'basic'),
          eq(subscriptionsTable.plan, 'premium'),
          eq(subscriptionsTable.plan, 'free')
        ),
        isNull(subscriptionsTable.endDate)
      )
    )
    .groupBy(subscriptionsTable.plan)

  return breakdown
}

export async function getActiveSubsByPlanPerMonth(interval: number = 12) {
  const monthOverMonthSubscriptions = await db
    .select({
      month: sql<Date>`date_trunc('month', series.month)`,
      monthLabel: sql<string>`to_char(date_trunc('month', series.month), 'Mon YYYY')`,
      yearlySubscriptions: sql<number>`count(*) filter (where ${subscriptionsTable.type} = 'yearly'
        and ${subscriptionsTable.startDate} <= series.month
        and (${subscriptionsTable.endDate} is null or ${subscriptionsTable.endDate} >= series.month))`,
      monthlySubscriptions: sql<number>`count(*) filter (where ${subscriptionsTable.type} = 'monthly'
        and ${subscriptionsTable.startDate} <= series.month
        and (${subscriptionsTable.endDate} is null or ${subscriptionsTable.endDate} >= series.month))`
    })
    .from(
      sql`
    (
      SELECT generate_series(
        DATE_TRUNC('month', CURRENT_DATE - (${interval}::integer || ' months')::interval),
        DATE_TRUNC('month', CURRENT_DATE),
        '1 month'::interval
      ) as month
    ) as series
    `
    )
    .leftJoin(
      subscriptionsTable,
      sql`
        ${subscriptionsTable.startDate} <= series.month
        and (
        ${subscriptionsTable.endDate} is null
        or ${subscriptionsTable.endDate} > series.month
        )
    `
    )
    .groupBy(
      sql`DATE_TRUNC('month', series.month)`,
      sql`to_char(date_trunc('month', series.month), 'Mon YYYY')`
    )
    .orderBy(asc(sql`DATE_TRUNC('month', series.month)`))

  return monthOverMonthSubscriptions
}
