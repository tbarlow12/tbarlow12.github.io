import React from "react";
import ReactMarkdown from "react-markdown";
import { BlogPostMetadata } from "../../../models/blog";
import { NavLink } from "react-router-dom";

export function BlogPostPreview(blogPost: BlogPostMetadata) {

  return (
    <div className="blog-post-preview">
      <div className="blog-post-preview-title">
        <NavLink title={blogPost.data.title} to={`/blog/${blogPost.data.path}`} >{blogPost.data.title}</NavLink>
      </div>
      <div>{new Date(blogPost.data.date).toDateString()}</div>
      <div>{blogPost.data.preview}</div>
      <div className="blog-post-preview-content">
        <ReactMarkdown source={blogPost.content}/>
      </div>
    </div>
  )
}