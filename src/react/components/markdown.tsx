import React from "react";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "./codeBlock"

export interface MarkdownProps {
  content: string;
  language?: string;
}



export function Markdown(props: MarkdownProps) {
  return (
    <ReactMarkdown
      source={props.content}
      linkTarget="_blank"
      escapeHtml={false}
      renderers={{ code: CodeBlock }}
    />
  )
}