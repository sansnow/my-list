import React from "react";
import type { Media } from "@/types/media";
import Image from "next/image";

const Card = ({ title, type, description, status = "in_progress", coverUrl, id, releaseYear = 1999 }: Media) => {

  const display_status = "";



  return <div className=" bg-emerald-900 p-4 rounded-2xl border flex flex-col justify-between">
    <div>
      <div className="w-full h-52 bg-cyan-600 rounded-2xl overflow-hidden">
        <Image alt="cover image" width={800} height={400} className="w-full object-cover " src={coverUrl}></Image>
      </div>

      <div className="flex justify-between items-center text-xl my-1">
        <p className="opacity-70 ">#{type}</p>
        <p>{status}</p>
      </div>

      <h1 className="text-4xl font-semibold">{title}</h1>


      <h5 className="text-[18px] opacity-80 my-2">{description}</h5>
    </div>

    <div className="self-baseline-last bg-green-800 p-2 rounded-2xl">
      {releaseYear}
    </div>
  </div>;
};

export default Card;
