"use client"

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useState } from "react";


export default function Sidebar() {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={` transition-all duration-300 bg-[#0b150a] border border-[#2b2c27] m-3 rounded-2xl p-2 px-4 ${isOpen ? 'w-1/4' : 'w-16'}`}>
            <div className="mt-4 flex items-center text-3xl justify-between transition-all duration-400">
                {isOpen && <h1>My List</h1>}
                <div className="cursor-pointer w-8 h-8">
                    {isOpen ? <PanelLeftClose onClick={() => setIsOpen(!isOpen)} className="w-full h-full" /> : <PanelLeftOpen onClick={() => setIsOpen(!isOpen)} className="w-full h-full" />}
                </div>
            </div>
        </div>
    )
}