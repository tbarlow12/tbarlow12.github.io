import React from "react";
import { Route, Switch } from "react-router-dom";
import { appManifest } from "../../createManifest";
import { Manifest } from "../../manifest";
import { HomePage } from "../../pages/homePage";

export default function MainContentRouter() {
  return (
    <div className="app-main-content">
      <Switch>
        {getRoutes(appManifest, [])}
        <Route component={HomePage} />
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