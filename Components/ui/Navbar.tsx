import { Search } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full text-2xl p-3 flex items-center justify-between border-2 border-[#2b2c27] bg-[#0b150a] rounded-2xl mt-3">
      <Link href={"/dashboard"}>
        My List
      </Link>

      <div className="searchbar border flex items-center justify-between rounded-2xl p-2 px-4">
        <input placeholder="just type here" type="search" className="outline-0 caret-mauve-200 " />

        <Search className="cursor-pointer"/>
      </div>
    </div>
  );
}
