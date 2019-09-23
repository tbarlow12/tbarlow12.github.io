import React from "react";
import { Route, Switch } from "react-router-dom";
import { BlogPage } from "../../pages/blogPage"
import { HomePage } from "../../pages/homePage";
import { BlogPostPage } from "../../pages/blogPostPage";
import { ProjectsPage } from "../../pages/projectsPage";
import { InterestsPage } from "../../pages/interestsPage";
import { ResumePage } from "../../pages/resumePage";

export default function MainContentRouter() {
  return (
    <div className="app-main-content">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/blog" exact component={BlogPage} />
        <Route path="/blog/:blogPost" component={BlogPostPage} />
        <Route path="/projects" exact component={ProjectsPage} />
        <Route path="/interests" exact component={InterestsPage} />
        <Route path="/resume" exact component={ResumePage} />
        <Route component={HomePage} />
      </Switch>
    </div>
  )
}