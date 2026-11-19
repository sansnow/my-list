import Image from "next/image";
import Navbar from "@/Components/ui/Navbar";
import { getMedia } from "@/services/media-service";


export default async function Home() {

  const media = await getMedia();

  
  return (
    <div className="text-3xl">
      <Navbar></Navbar>
    </div>
  );
}
