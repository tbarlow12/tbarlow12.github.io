import React from "react";
import { Prism } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

export interface CodeBlockProps {
  language: string;
  value: string;
}

export function CodeBlock(props: CodeBlockProps) {
  return (
    <Prism language={props.language} style={darcula}>
      {props.value}
    </Prism>
  ) 
}
