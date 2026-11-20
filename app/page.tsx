import Image from "next/image";
import Navbar from "@/Components/ui/Navbar";
import { getMedia } from "@/services/media-service";
import Sidebar from "@/Components/ui/Sidebar";
import Link from "next/link";


export default async function Home() {

  const media = await getMedia();

  
  return (
    <div className="text-3xl h-screen overflow-hidden">
      home page
      <Link href={"/dashboard"}>dashboard</Link>
    </div>
  );
}
