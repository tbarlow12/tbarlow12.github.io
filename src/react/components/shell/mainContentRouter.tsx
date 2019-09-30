import React from "react";
import { Route, Switch } from "react-router-dom";
import { BlogPage } from "../../pages/blogPage"
import { HomePage } from "../../pages/homePage";
import { BlogPostPage } from "../../pages/blogPostPage";
import { ProjectsPage } from "../../pages/projectsPage";
import { InterestsPage } from "../../pages/interestsPage";
import { ResumePage } from "../../pages/resumePage";
import { BooksPage } from "../../pages/booksPage";
import { manifest } from "../../appRegistry"
import { Manifest } from "../../manifest";

export default function MainContentRouter() {
  return (
    <div className="app-main-content">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/blog" exact component={BlogPage} />
        <Route path="/blog/:blogPost" component={BlogPostPage} />
        <Route path="/projects" exact component={ProjectsPage} />
        <Route path="/about" exact component={InterestsPage} />
        <Route path="/books" exact component={BooksPage} />
        <Route path="/resume" exact component={ResumePage} />
        {/* {getRoutes(manifest, [])}
        <Route component={HomePage} /> */}
      </Switch>
    </div>
  )
}

function getRoutes(manifest: Manifest, routes: any[]) {
  if (manifest.getExact()) {
    routes.push(
      <Route path={manifest.getPath()} exact component={manifest.getComponent()} />
    )
  } else {
    routes.push(
      <Route path={manifest.getPath()} component={manifest.getComponent()} />
    )
  }
  for (const child of manifest.getChildren()) {
    getRoutes(child, routes)
  }
  return routes;
}