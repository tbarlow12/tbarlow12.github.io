import React from "react";
import { NavLink } from "react-router-dom";
import { BlogPostMetadata } from "../../../models/blog";
import { Markdown } from "../markdown";

export function BlogPostPreview(blogPost: BlogPostMetadata) {

  return (
    <div className="blog-post-preview">
      {blogPost.data.thumbnail &&
      <div className="blog-post-preview-thumbnail">
        <img src={`/content/images/${blogPost.data.thumbnail}`} alt=""></img>
      </div>}
      <div className="blog-post-preview-title">
        <NavLink title={blogPost.data.title} to={`/blog/${blogPost.data.path}`} >{blogPost.data.title}</NavLink>
      </div>
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