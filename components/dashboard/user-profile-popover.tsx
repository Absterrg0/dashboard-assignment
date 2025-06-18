import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import Image from "next/image"
import { ChevronDown } from "lucide-react"




export function UserProfilePopover() {
    return (
        <Popover>
            <PopoverTrigger>
                <div className="flex items-center text-start gap-4">
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
            <PopoverContent className="w-56">
                        <div className="flex flex-col">
                            <p className="text-sm font-medium">John Doe</p>
                            <p className="text-xs text-gray-500">john.doe@example.com</p>
                        </div>
            </PopoverContent>
        </Popover>
    )
}