import React from "react";
import booksPage from "../../content/pages/books.json";
import { Markdown } from "../components/markdown";

export function BooksPage() {
  return (
    <div className="app-page-about">
      <Markdown 
        content={booksPage.content} 
      />
    </div>
  )
}
