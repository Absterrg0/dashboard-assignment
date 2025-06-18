import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import Image from "next/image"
import { Calendar, CalendarClock, CheckSquare, CreditCard, Home, Link, LogOut, MessageSquare } from "lucide-react"
import { UserProfilePopover } from "./user-profile-popover"


const sidebarItems = [
    {
        title: "Home",
        url: "",
        icon: Home,
    },
    {
        title: "Calendar",
        url: "/calendar",
        icon: Calendar,
    },
    {
        title: "Chats",
        url: "/chats",
        icon: MessageSquare,
    },
    {
        title: "Payments",
        url: "/payments",
        icon: CreditCard,
    },
    {
        title: "Appointments",
        url: "/appointments",
        icon: CalendarClock,
    },
    {
        title: "To-Do List",
        url: "/todo",
        icon: CheckSquare,
    },
]
  
  export function AppSidebar() {
    return (
        <Sidebar variant="inset">
        <SidebarContent>
            <SidebarHeader>
                <div className="flex items-center justify-start ml-4 ">
                    <Image src="/logo.png" alt="logo" width={100} height={100} />
                </div>
            </SidebarHeader>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarItems.map((item) => (
                  <SidebarMenuItem className="py-2" key={item.title}>
                    <SidebarMenuButton  className="p-4 " asChild>
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
        <SidebarFooter>
                <UserProfilePopover />
        </SidebarFooter>
      </Sidebar>
    )
  }
