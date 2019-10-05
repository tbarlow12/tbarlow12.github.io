import { appManifest } from "../react/createManifest";
import { Manifest } from "../react/manifest";

export class PathService {

  private manifest: Manifest;

  public constructor() {
    this.manifest = appManifest;
  }

  public ls(pathname: string, targetPath?: string): string {
    try {
      const manifest = this.getManifest(pathname, targetPath);
      return manifest.getChildren().map((child) => child.getName()).join(" ")
    } catch (err) {
      return `Invalid command ${err}`;
    }
  }

  public transformPath(pathname: string, targetPath: string): string {
    const manifest = this.getManifest(pathname, targetPath);
    return manifest.getPath(true).replace("//", "/");
  }

  private getManifest(pathname: string, targetPath?: string) {
    if (targetPath === "~") {
      return this.manifest;
    }
    if (targetPath && targetPath.startsWith("~/")) {
      pathname = "";
      targetPath = targetPath.substr(2);
    }
    let currentSplit = pathname.split("/");
    const targetSplit = (targetPath) ? targetPath.split("/") : []
    
    currentSplit = currentSplit.concat(targetSplit);

    let currentManifest = this.manifest;

    for (const path of currentSplit) {
      if (path === "..") {
        if (!currentManifest.getParent()) {
          throw new Error(`Invalid path: ${pathname + targetPath}`);
        }
        currentManifest = currentManifest.getParent();
      }
      const child = currentManifest.getChildren()
        .find((c) => c.getName() === path);
      if (child) {
        currentManifest = child;
      }
    }
    return currentManifest;
  }
}
