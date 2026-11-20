import type { Media } from "@/types/media";

export const mockMedia: Media[] = [
    {
        id: "1",
        type: "anime",
        title: "naruto",
        coverUrl: "/images/naruto.jpg",
        description: "Naruto Uzumaki, a young outcast ninja who dreams of becoming the Hokage, the leader of his village",    
        releaseYear: 1999,
        status: "completed"
    },
    {
        id: "1",
        type: "anime",
        title: "one_piece",
        coverUrl: "/images/one_piece.jpg",
        description: "Naruto Uzumaki, a young outcast ninja who dreams of becoming the Hokage, the leader of his village",    
        releaseYear: 1999,
        status: "in_progress"
    },
    {
        id: "2",
        type: "movie",
        title: "Batman",
        coverUrl: "/images/batman.jpg",
        description: "A rich man becomes a superhero",
        releaseYear: 1989,
        status: "completed"
    },
    {
        id: "3",
        type: "game",
        title: "undertale",
        coverUrl: "/images/undertale.webp",
        status: "on_hold",
    }
]