import { MetricCards, type Metric } from '@/components/metric-cards'
import { UsersTable, type User } from '@/components/users-table'
import { Activity, CreditCard, PoundSterling, Users } from 'lucide-react'

const metrics: Metric[] = [
  {
    title: 'Users',
    value: 500,
    change: '+60% from last month',
    icon: <Users className='h-4 w-4' />
  },
  {
    title: 'Subscriptions',
    value: 300,
    change: '+100% from last month',
    icon: <PoundSterling className='h-4 w-4' />
  },
  {
    title: 'Revenue',
    value: '£200',
    change: '+200% from last month',
    icon: <CreditCard className='h-4 w-4' />
  },
  {
    title: 'Last Month Subscriptions',
    value: 30,
    change: '+10 in the last week',
    icon: <Activity className='h-4 w-4' />
  }
]

const users: User[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    lastSignInAt: 1708423800000,
    emailAddresses: [
      {
        id: 101,
        emailAddress: 'john.doe@example.com'
      }
    ]
  },
  {
    id: 2,
    firstName: 'Alice',
    lastName: 'Smith',
    lastSignInAt: 1708356300000,
    emailAddresses: [
      {
        id: 201,
        emailAddress: 'alice.work@company.com'
      },
      {
        id: 202,
        emailAddress: 'alice.personal@email.com'
      }
    ]
  },
  {
    id: 3,
    lastName: 'Johnson',
    lastSignInAt: 1708246500000,
    emailAddresses: [
      {
        id: 301,
        emailAddress: 'johnson@example.com'
      }
    ]
  },
  {
    id: 4,
    firstName: 'Maria',
    lastName: 'Garcia',
    lastSignInAt: 1708416000000,
    emailAddresses: [
      {
        id: 401,
        emailAddress: 'maria.garcia@company.com'
      }
    ]
  },
  {
    id: 5,
    firstName: 'David',
    lastSignInAt: 1708184400000,
    emailAddresses: [
      {
        id: 501,
        emailAddress: 'david.temp@example.com'
      }
    ]
  }
]

export default function Home() {
  return (
    <main className='container mx-auto space-y-5 p-4'>
      <h1 className='mb-6 text-3xl font-bold'>Dashboard</h1>
      <MetricCards metrics={metrics} />
      <div>
        <UsersTable users={users} />
      </div>
    </main>
  )
}
