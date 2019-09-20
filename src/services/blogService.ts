
import grayMatter from "gray-matter";
import { BlogPostMetadata } from "../models/blog";
import postsPreviews from "../blog/posts-preview.json";
import postsFull from "../blog/posts-full.json"
const md5 = require("md5.js");

export interface BlogPostJson {
  name: string;
  content: string;
}

export class BlogService {
  
  public static getPreviews() {
    return this.getBlogPosts(postsPreviews);
  }

  public static getBlogPostPath(blogPost: BlogPostMetadata) {
    if (blogPost.data.path) {
      return blogPost.data.path;
    }
    return new md5().update(blogPost.data.title).digest("hex").substr(0, 8);
  }

  public static getFullPost(blogPostId: string) {
    return this.getBlogPost((postsFull as { [id: string]: BlogPostJson })[blogPostId]);
  }

  private static getBlogPosts(posts: BlogPostJson[]): BlogPostMetadata[] {
    return posts.map(this.getBlogPost);
  }

  private static getBlogPost(post: BlogPostJson): BlogPostMetadata {
    const blogPost: BlogPostMetadata = grayMatter(post.content) as any;
    if (!blogPost.data.preview) {
      blogPost.data.preview = "No preview";
    }
    if (!blogPost.data.path) {
      blogPost.data.path = BlogService.getBlogPostPath(blogPost);
    }
    return blogPost;
  }
}