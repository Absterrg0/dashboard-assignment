"use client"

import { usePathname } from "next/navigation"
import {
  Calendar,
  Home,
  Inbox,
  Search,

  FileText,
  Mail,
  ShoppingCart,
  CreditCard,
  Bell,
  Package,
  Truck,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { UserProfilePopover } from "./user-profile-popover"
import Image from "next/image"  
const menuItems = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
    id: "home",
  },
  {
    title: "Todo",
    url: "/home/todo",
    icon: Inbox,
    id: "todo",
  },
  {
    title: "Calendar",
    url: "/home/calendar",
    icon: Calendar,
    id: "calendar",
  },
  {
    title: "Search",
    url: "/home/search",
    icon: Search,
    id: "search",
  },
]

const businessItems = [
  {
    title: "Orders",
    url: "/home/orders",
    icon: ShoppingCart,
    id: "orders",
  },
  {
    title: "Products",
    url: "/home/products",
    icon: Package,
    id: "products",
  },
  {
    title: "Shipping",
    url: "/home/shipping",
    icon: Truck,
    id: "shipping",
  },
  {
    title: "Payments",
    url: "/home/payments",
    icon: CreditCard,
    id: "payments",
  },
]

const communicationItems = [
  {
    title: "Messages",
    url: "/home/messages",
    icon: Mail,
    id: "messages",
  },
  {
    title: "Notifications",
    url: "/home/notifications",
    icon: Bell,
    id: "notifications",
  },
  {
    title: "Reports",
    url: "/home/reports",
    icon: FileText,
    id: "reports",
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <div className="px-2 py-4 flex items-center justify-center">
          <Image priority  className="invert " src="/logo.png" alt="logo" width={100} height={100} />
        </div>
    </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Business</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {businessItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Communication</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {communicationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
            <UserProfilePopover />
          </SidebarFooter>
    </Sidebar>
  )
}