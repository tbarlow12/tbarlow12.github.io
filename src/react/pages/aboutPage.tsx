import React from "react";
import interestsPage from "../../content/pages/about.json";
import ReactMarkdown from "react-markdown";

export function AboutPage() {
  return (
    <div className="app-page-about">
      <ReactMarkdown source={interestsPage.content} />
    </div>
  )
}
