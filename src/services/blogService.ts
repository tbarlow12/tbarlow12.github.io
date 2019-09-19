
import grayMatter from "gray-matter";
import { BlogPostMetadata } from "../models/blog";
import postsPreviews from "../blog/posts-preview.json";
import postsFull from "../blog/posts-full.json"

export interface BlogPostJson {
  name: string;
  content: string;
}

export class BlogService {
  
  public static getPreviews() {
    return this.getBlogPosts(postsPreviews);
  }

  public static getFullPost(title: string) {
    return this.getBlogPost((postsFull as any)[title]);
  }

  private static getBlogPosts(posts: BlogPostJson[]): BlogPostMetadata[] {
    return posts.map(this.getBlogPost);
  }

  private static getBlogPost(post: BlogPostJson): BlogPostMetadata {
    const blogPost: BlogPostMetadata = grayMatter(post.content) as any;
    if (!blogPost.data.preview) {
      blogPost.data.preview = "No preview";
    }
    return blogPost;
  }
}