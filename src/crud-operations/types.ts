export type Post = {
  content: string;
  imageUrls: string[] | null;
  likes: string[];
  mediaType: "image" | "video";
  userRef: string;
  videoUrl: string | null;
}