"use client"

import { useState, lazy, Suspense } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import Image from "next/image"
import { ChevronDown, User, HelpCircle, LogOut } from "lucide-react"

// Lazy load the profile dialog component
const ProfileDialogComponent = lazy(() => import("./profile-dialog-component"))

export function UserProfilePopover() {
  const [open, setOpen] = useState(false)
  const [profileDialogOpen, setProfileDialogOpen] = useState(false)

  const handleProfileClick = () => {
    setOpen(false) // Close the popover
    setProfileDialogOpen(true) // Open the profile dialog
  }

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div
            className="flex items-center text-start gap-4 cursor-pointer"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <Image
              src="https://i.pravatar.cc/500"
              alt="User avatar"
              width={40}
              height={40}
              className="rounded-2xl"
              priority
            />
            <div className="flex flex-col">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">john.doe@example.com</p>
            </div>
            <ChevronDown fill="#000" strokeWidth={4} className="w-4 h-4" />
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="w-56"
          sideOffset={5}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="flex flex-col gap-2">
            <div 
              className="flex items-center gap-2 p-2 hover:bg-accent rounded-md cursor-pointer"
              onClick={handleProfileClick}
            >
              <User className="w-4 h-4" />
              <span className="text-sm">Profile</span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex items-center gap-2 p-2 hover:bg-accent rounded-md cursor-pointer">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm">Help</span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex items-center gap-2 p-2 hover:bg-accent rounded-md cursor-pointer text-red-500">
              <LogOut className="w-4 h-4" />
              <span className="text-sm">Log out</span>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {/* Lazy loaded Profile Dialog */}
      <Suspense fallback={null}>
        <ProfileDialogComponent
          open={profileDialogOpen}
          onOpenChange={setProfileDialogOpen}
        />
      </Suspense>
    </>
  )
}
