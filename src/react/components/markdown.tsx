import React from "react";
import ReactMarkdown from "react-markdown";

export interface MarkdownProps {
  content: string;
}

export function Markdown(props: MarkdownProps) {
  return (
    <ReactMarkdown
      source={props.content}
      linkTarget="_blank"
      escapeHtml={false}
    />
  )
}