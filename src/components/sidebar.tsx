'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar'

import { Home, Settings, GitPullRequestArrow } from 'lucide-react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function AppSideBar() {
  const pathname = usePathname()

  const sideBarItems: {
    name: string
    href: string
    icon: React.ReactNode
  }[] = [
    {
      name: 'Dashboard',
      href: '/',
      icon: <Home />
    },

    { name: 'Support', href: '/requests', icon: <GitPullRequestArrow /> },
    { name: 'Settings', href: '/settings', icon: <Settings /> }
  ]

  return (
    <Sidebar side='left'>
      <SidebarHeader>
        {/* <SidebarTrigger /> */}
        <h1 className='text-primary text-2xl font-bold'>Admin Portal</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {sideBarItems.map((item, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton asChild isActive={pathname === item.href}>
                <Link href={item.href}>
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
