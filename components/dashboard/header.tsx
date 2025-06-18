import { SidebarTrigger } from "../ui/sidebar";
import { ModeToggle } from "./theme-toggle-button";



export default function Header() {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-xl text-2xl font-bold text-foreground">
                    Dashboard
                </div>
            </div>
            <ModeToggle />
        </div>
    )
}