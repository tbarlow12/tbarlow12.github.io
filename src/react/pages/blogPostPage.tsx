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
    <div className="blog-post-page">
      <div className="blog-post-page-title">
        <h1>{blogPost.data.title}</h1>
      </div>
      <div className="blog-post-page-date">
        <h4>{new Date(blogPost.data.date).toDateString()}</h4>
      </div>
      {
        blogPost.data.preview &&
        <div className="blog-post-page-preview">
          {blogPost.data.preview}
        </div>
      }
      <div>{blogPost.data.preview}</div>
      <div className="blog-post-page-content">
        <Markdown 
          content={blogPost.content}
        />
      </div>
    </div>
  )
}