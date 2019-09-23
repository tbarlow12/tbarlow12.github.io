import React from "react";
import ReactMarkdown from "react-markdown";
import resumePage from "../../content/pages/resume.json"

export function ResumePage() {
  return (
    <div className="app-page-resume">
      <ReactMarkdown source={resumePage.content} />
    </div>
  )
}