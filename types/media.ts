export type MediaType =
  | "anime"
  | "movie"
  | "game"
  | "book";
//   | "music";

export interface Media {
  id: string;
  type: MediaType;
  title: string;
  description?: string;
  coverUrl: string;
  releaseYear?: number;
  // totalUnits?: number;
}