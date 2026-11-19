"use client"

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <div  className={`cursor-pointer transition-all duration-300 bg-[#0b150a] border border-[#2b2c27] m-3 rounded-2xl p-2 px-4 ${isOpen ? 'w-1/4' : 'w-16'}`}>
            <div onClick={() => setIsOpen(!isOpen)}  className="mt-4 flex items-center text-3xl justify-between transition-all duration-400">
                {isOpen && <h1>My List</h1>}
                <div className="cursor-pointer w-8 h-8">
                    {isOpen ? <PanelLeftClose onClick={() => setIsOpen(!isOpen)} className="w-full h-full" /> : <PanelLeftOpen onClick={() => setIsOpen(!isOpen)} className="w-full h-full" />}
                </div>
            </div>

           {isOpen ? <ul className="w-full my-8 flex flex-col items-center justify-center gap-2 ">
                <Link href={"/anime"} className="w-full bg-[#354228] p-2 rounded-xl cursor-pointer hover:bg-[#35420f] ">
                    Anime
                </Link>
                <Link href={"/books"} className="w-full bg-[#354228] p-2 rounded-xl cursor-pointer hover:bg-[#35420f]">Books</Link>
                <Link href={"/movies"} className="w-full bg-[#354228] p-2 rounded-xl cursor-pointer hover:bg-[#35420f]">Movies</Link>
                <Link href={"/games"} className="w-full bg-[#354228] p-2 rounded-xl cursor-pointer hover:bg-[#35420f]">Games</Link>
            </ul> : <></>}
        </div>
    )
}