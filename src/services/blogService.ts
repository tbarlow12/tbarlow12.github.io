
import postsFull from "../content/blog/posts-full.json";
import postsPreviews from "../content/blog/posts-preview.json";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BlogPostMetadata } from "../models/blog";
const md5 = require("md5.js");

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
    return (postsFull as { [id: string]: BlogPostMetadata })[blogPostId];
  }

  private static getBlogPosts(posts: BlogPostMetadata[]): BlogPostMetadata[] {
    return posts
      .sort((a, b) =>
        (new Date(a.data.date) < new Date(b.data.date)) ? 1 : -1
      );
  }
}