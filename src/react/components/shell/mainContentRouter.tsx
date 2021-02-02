import React from "react";
import { Route, Switch } from "react-router-dom";
import { appManifest } from "../../createManifest";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Manifest } from "../../manifest";
import { DefaultPage, PageType } from "../../pages/defaultPage";

export default function MainContentRouter() {
  return (
    <div className="app-main-content">
      <Switch>
        {getRoutes(appManifest, [], new Set())}
        <Route component={DefaultPage(PageType.PAGE, "home")} />
      </Switch>
    </div>
  )
}

function getRoutes(manifest: Manifest, routes: any[], paths: Set<string>) {
  if (paths.has(manifest.getPath())) {
    return;
  }
  paths.add(manifest.getPath());
  const route = (manifest.getExact())
    ?
    <Route path={manifest.getPath()} exact component={manifest.getComponent()} />
    :
    <Route path={manifest.getPath()} component={manifest.getComponent()} />
  routes.push(route);
  for (const child of manifest.getChildren()) {
    getRoutes(child, routes, paths)
  }
  return routes;
}