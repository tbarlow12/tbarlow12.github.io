import React from "react";
import projectsPage from "../../content/pages/projects.json";
import ReactMarkdown from "react-markdown";

export function ProjectsPage() {
  return (
    <div className="app-page-projects">
      <ReactMarkdown source={projectsPage.content} />
    </div>
  )
}
