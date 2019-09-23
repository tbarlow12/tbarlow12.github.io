import React from "react";
import interestsPage from "../../content/pages/interests.json";
import ReactMarkdown from "react-markdown";

export function InterestsPage() {
  return (
    <div className="app-page-interests">
      <ReactMarkdown source={interestsPage.content} />
    </div>
  )
}
