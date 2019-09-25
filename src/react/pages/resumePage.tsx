import React from "react";
import ReactMarkdown from "react-markdown";
import resumePage from "../../content/pages/resume.json"
import { links } from "../../content/links"

export function ResumePage() {
  return (
    <div className="app-page-resume">
      <ReactMarkdown source={resumePage.content} />
      <a href={links.resumeDownload}>Download PDF</a>
    </div>
  )
}