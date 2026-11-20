import Image from "next/image";
import Navbar from "@/Components/ui/Navbar";
import { getMedia } from "@/services/media-service";
import Sidebar from "@/Components/ui/Sidebar";
import Card from "@/Components/ui/Card";


export default async function Home() {

  const media = await getMedia();


  return (
    <div className="text-3xl h-screen overflow-hidden">
      this is dashboard
      <div className="grid grid-cols-4 gap-2 ">

        {
          media.map((mediaa, idx) => (
            <Card key={idx} title={mediaa.title} description={mediaa.description} type={mediaa.type} status="completed" coverUrl={mediaa.coverUrl} id={mediaa.id}></Card>
          ))
        }
      </div>

    </div>
  );
}
