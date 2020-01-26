import React from "react";
import { BlogService } from "../../services/blogService";
import { BlogPostPreview } from "../components/blog/blogPostPreview";
import { BlogPostMetadata } from "../../models/blog";

export function BlogPage() {

  return (
    <div className="blog-page">
      <h1>Blog</h1>
      {BlogService.getPreviews().map((blogPost: BlogPostMetadata) => 
        <div className="blog-page-preview">
          {BlogPostPreview(blogPost)}
        </div>)}
    </div>
  )
}


