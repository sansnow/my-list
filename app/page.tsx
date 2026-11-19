import Image from "next/image";
import Navbar from "@/Components/Navbar";
import { getMedia } from "@/services/media-service";


export default async function Home() {

  const media = await getMedia();

  
  return (
    <div className="bg">
      <Navbar></Navbar>
      my list yipee

      {media[0].title}
    </div>
  );
}
