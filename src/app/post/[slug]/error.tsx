"use client"

import Link from "next/link"

export default function Error() {
    return (
        <main className="flex flex-col items-center justify-center w-full h-[calc(100vh-64px)] gap-6" >
            <h1 className="text-4xl font-bold" >Ops essa página não existe!</h1>
            <Link
                className="bg-gray-800 text-white py-3 px-6 rounded-md duration-300 transition-colors hover:bg-black"
                href="/"
            >
                Voltar para Home
            </Link>
        </main>
    )
}