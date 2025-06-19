import { ModeToggle } from "./theme-toggle-button";



export default function Header() {
    return (
        <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
                <div className="text-2xl font-bold text-foreground">
                    Dashboard
                </div>
            </div>
            <ModeToggle />
        </div>
    )
}