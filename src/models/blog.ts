export interface BlogPostMetadata {
  data: {
    title: string;
    date: string;
    preview: string;
    path: string;
  };
  content: string;
}