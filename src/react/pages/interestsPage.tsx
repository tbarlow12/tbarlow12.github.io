import React from "react";
import interestsPage from "../../content/pages/interests.json";
import { Markdown } from "../components/markdown";

export function InterestsPage() {
  return (
    <div className="app-page-about">
      <Markdown 
        content={interestsPage.content} 
      />
    </div>
  )
}
