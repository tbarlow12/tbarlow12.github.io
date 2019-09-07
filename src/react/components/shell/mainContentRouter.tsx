import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom"
import { HomePage } from "../../pages/homePage"
import { BlogPage } from "../../pages/blogPage"

export default function MainContentRouter() {
  return (
    <div className="app-content">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/blog" exact component={BlogPage} />
      </Switch>
    </div>
  )
}