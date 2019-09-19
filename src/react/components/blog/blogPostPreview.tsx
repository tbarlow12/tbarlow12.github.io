import React from "react";
import ReactMarkdown from "react-markdown";
import { BlogPostMetadata } from "../../../models/blog";

export function BlogPostPreview(blogPost: BlogPostMetadata) {
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