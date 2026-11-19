export type MediaType =
  | "anime"
  | "movie"
  | "game"
  | "book";
//   | "music";

export type StatusType =
  | "planned"
  | "in_progress"
  | "completed"
  | "on_hold"
  | "dropped";

export interface Media {
  id: string;
  type: MediaType;
  title: string;
  description?: string;
  coverUrl: string;
  releaseYear?: number;
  status: StatusType;
  // totalUnits?: number;
}