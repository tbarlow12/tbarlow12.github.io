export interface BlogPostMetadata {
  data: {
    title: string;
    date: string;
    preview?: string;
    path: string;
    thumbnail?: string;
  };
  content: string;
  isEmpty?: boolean;
  excerpt?: string;
}