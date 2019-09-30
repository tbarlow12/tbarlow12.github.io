import React from "react";
import { Markdown } from "../components/markdown";

export function DefaultPage (pageName: string) {
  return () => {
    const pageJson = require(`../../content/pages/${pageName}.json`);
    return (
      <div className={`app-page-${pageName}`}>
        <Markdown
          content={pageJson.content}
        />
      </div>
    );
  }
}