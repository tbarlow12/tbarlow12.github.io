import React from "react";
import { PageProps } from "../../models/generic";
import { BlogService } from "../../services/blogService";
import { Markdown } from "../components/markdown";

export function BlogPostPage(pageProps: PageProps) {
  const match = pageProps.location.pathname.match(/blog\/(.*)/);
  let blogPostId: string;
  if (match) {
    blogPostId = match[1];
  } else {
    throw new Error("Invalid URL");
  }
  const blogPost = BlogService.getFullPost(blogPostId);
  return (
    <div className="blog-post-preview">
      <div className="blog-post-preview-title">{blogPost.data.title}</div>
      <div>{new Date(blogPost.data.date).toDateString()}</div>
      <div>{blogPost.data.preview}</div>
      <div className="blog-post-preview-content">
        <Markdown 
          content={blogPost.content}
        />
      </div>
    </div>
  )
}