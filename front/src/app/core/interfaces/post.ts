export interface Post {
  id: string;
  title: string;
  createdAt: string | null;
  authorId?: string | null;
  authorName?: string | null;
  content?: string | null;
  likes: number | null;
}
