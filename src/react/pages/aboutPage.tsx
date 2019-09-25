import React from "react";
import interestsPage from "../../content/pages/about.json";
import { Markdown } from "../components/markdown";

export function AboutPage() {
  return (
    <div className="app-page-about">
      <Markdown 
        content={interestsPage.content} 
      />
    </div>
  )
}
