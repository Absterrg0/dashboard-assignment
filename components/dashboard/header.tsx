import SearchBar from "./search-bar";
import { ModeToggle } from "./theme-toggle-button";



export default function Header() {
    return (
        <div className="flex items-center justify-between">
            <SearchBar />
            <ModeToggle />
        </div>
    )
}