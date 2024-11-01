"use client";

import Link from "next/link";
import { X, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export const Submenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState<number | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth > 640) setIsOpen(false);
        };

        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="w-full m-auto max-w-7xl pt-16 px-3 pb-2 relative">
            <div
                onClick={toggleMenu}
                className="inline-flex gap-3 items-center text-sm font-bold pointer sm:hidden cursor-pointer">
                <Menu className="cursor-pointer" size={34} color="#121212" />
                Menu
            </div>

            {isOpen ? (
                <ul className="py-3 flex z-[999] flex-col items-center justify-center fixed inset-0 bg-white min-w-screen w-full min-h-screen top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
                    <li className="py-2 px-3 rounded text-3xl flex flex-col items-center gap-3 font-bold duration-300 bg-transparent">
                        <Link className="hover:bg-gray-950 hover:text-white p-2 rounded duration-300 transition-colors" href="/">
                            Página 1
                        </Link>
                        <Link className="hover:bg-gray-950 hover:text-white p-2 rounded duration-300 transition-colors" href="/">
                            Página 2
                        </Link>
                        <button onClick={toggleMenu}>
                            <X size={68} color="#121212" className="cursor-pointer" />
                        </button>
                    </li>
                </ul>
            ) : windowWidth !== null && windowWidth >= 640 && (
                <ul className="hidden sm:flex py-3">
                    <li className="bg-gray-950 text-white py-2 px-3 rounded">
                        <Link href="/">Página 1</Link>
                    </li>
                </ul>
            )}
        </div>
    );
};
