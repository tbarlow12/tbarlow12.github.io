import React from "react";
import ReactMarkdown from "react-markdown";
import { BlogService } from "../../services/blogService";
import { PageProps } from "../../models/generic";

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
        <ReactMarkdown source={blogPost.content}/>
      </div>
    </div>
  )
}