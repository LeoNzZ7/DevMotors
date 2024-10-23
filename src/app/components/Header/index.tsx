"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export const Header = () => {
    const [top, setTop] = useState(true)

    useEffect(() => {
        const scrollHandler = () => {
            window.scrollY > 10 ? setTop(false) : setTop(true) // eslint-disable-line 
        }

        window.addEventListener("scroll", scrollHandler)
        return () => window.removeEventListener("scroll", scrollHandler)
    }, [])



    return (
        <header
            style={{ opacity: top ? "100%" : "90%", boxShadow: top ? "0px 6px 20px - 12px rgba(0, 0, 0, 0.6)" : "" }}
            className="w-full z-50 fixed bg-white duration-300 backdrop-blur-md" >
            <div className="max-w-7xl mx-auto h-16 px-2 md:px-0" >
                <div className="flex h-full justify-between items-center" >
                    <div className="flex" >
                        <Link className="text-3xl text-gray-900 font-bold" href="/">
                            DevMotors
                        </Link>
                    </div>
                    <nav
                        className="flex gap-3 py-2 px-3 text-gray-900 items-center font-medium hover:text-black duration-300 transition-colors"
                    >
                        <Link className="hover:underline" href="/">Inicio</Link>
                        <Link className="hover:underline" href="/#serviços">Serviços</Link>
                        <Link className="hover:underline" href="/#contatos">Contatos</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}