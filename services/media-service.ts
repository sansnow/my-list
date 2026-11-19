import { mockMedia } from "@/data/mock-media";
import type { Media } from "@/types/media";


export async function getMedia(): Promise<Media[]>{
    return mockMedia;    
}

export async function getMediaById(
    id: string
): Promise< Media | undefined> {
    return mockMedia.find((media) => media.id == id)
}