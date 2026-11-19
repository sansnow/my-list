import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className="text-2xl p-3 flex items-center justify-between border-2 border-[#2b2c27] bg-[#0b150a] rounded-2xl mt-5">
      <h1>
        My List
      </h1>

      <div className="searchbar border flex items-center justify-between rounded-2xl p-2 px-4">
        <input placeholder="just type here" type="search" className="outline-0 caret-mauve-200 " />

        <Search className="cursor-pointer"/>
      </div>
    </div>
  );
}
