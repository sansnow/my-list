import Image from "next/image";
import Navbar from "@/Components/ui/Navbar";
import { getMedia } from "@/services/media-service";
import Sidebar from "@/Components/ui/Sidebar";
import Card from "@/Components/ui/Card";

export default async function Home() {
  const media = await getMedia();

  return (
    <div className="text-3xl h-screen overflow-hidden">
      <h1 className="my-2">dashboard</h1>

      <div className="grid grid-cols-4 gap-2 ">
        {media.map((mediaa, idx) => (
          <Card
            key={idx}
            title={mediaa.title}
            description={mediaa.description}
            type={mediaa.type}
            releaseYear={mediaa.releaseYear}
            status="completed"
            coverUrl={mediaa.coverUrl}
            id={mediaa.id}
          ></Card>
        ))}
      </div>
    </div>
  );
}
