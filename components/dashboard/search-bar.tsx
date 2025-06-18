import { Input } from "../ui/input";





export default function SearchBar() {
    return (
        <div>
            <div className="w-xl">
                <Input className="p-4 py-5" type="text" placeholder="Search anything..."></Input>
            </div>
        </div>
    )
}