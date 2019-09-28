import React from "react";
import homePage from "../../content/pages/home.json";
import ReactMarkdown from "react-markdown";

export function HomePage() {
  return (
    <div className="app-page-home">
      <ReactMarkdown source={homePage.content} />
    </div>
  )
}
