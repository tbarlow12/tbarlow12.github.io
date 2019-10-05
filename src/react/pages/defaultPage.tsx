import React from "react";
import { Markdown } from "../components/markdown";

export enum PageType {
  PAGE = "pages",
  BLOG = "blog/posts"
}

export function DefaultPage (pageType: PageType, name: string, beforeContent?: any, afterContent?: any) {
  return () => {
    const pageJson = require(`../../content/${pageType}/${name}.json`);
    return (
      <div className={`app-page-${name}`}>
        {beforeContent}
        <Markdown
          content={pageJson.content}
        />
        {afterContent}
      </div>
    );
  }
}