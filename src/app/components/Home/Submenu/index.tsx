import Link from "next/link"
import { X, Menu } from "lucide-react"

export const Submenu = () => {
    return (
        <div className="m-auto max-w-7xl pt-16 px-3 pb-2 " >
            <div className="inline-flex gap-3 items-center text-sm font-bold pointer sm:hidden" >
                <Menu size={34} color="#121212" />
                Menu
            </div>
            <ul className="py-3 hidden sm:flex" >
                <li className="bg-gray-950 text-white py-2 px-3 rounded" >
                    <Link
                        className=""
                        href="/" >
                        Página 1
                    </Link>
                </li>
            </ul>
        </div>
    )
}