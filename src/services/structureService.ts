import postsFull from "../content/blog/posts-full.json";

export interface Structure {
  route: string;
  children: {
    [id: string]: Structure,
  };
  parent?: Structure;
}

export class StructureService {

  private structure: Structure;

  public constructor() {
    this.structure = this.initializeStructure();
  }

  public ls(pathname: string, targetPath?: string): string {
    try {
      const structure = this.getStructure(pathname, targetPath);
      return Object.keys(structure.children).join(" ");
    } catch (err) {
      return `Invalid command ${err}`;
    }
  }

  public transformPath(pathname: string, targetPath: string): string {
    const structure = this.getStructure(pathname, targetPath);
    return this.structureToPath(structure);
  }

  private getStructure(pathname: string, targetPath?: string) {
    if (targetPath === "~") {
      return this.structure;
    }
    if (targetPath && targetPath.startsWith("~/")) {
      pathname = "";
      targetPath = targetPath.substr(2);
    }
    let currentSplit = pathname.split("/");
    const targetSplit = (targetPath) ? targetPath.split("/") : []
    
    currentSplit = currentSplit.concat(targetSplit);

    let currentStructure = this.structure;

    for (const path of currentSplit) {
      if (path === "..") {
        if (!currentStructure.parent) {
          throw new Error(`Invalid path: ${pathname + targetPath}`);
        }
        currentStructure = currentStructure.parent;
      }
      if (currentStructure.children[path]) {
        currentStructure = currentStructure.children[path]
      }
    }
    return currentStructure;
  }

  private structureToPath(structure: Structure): string {
    return (structure.parent) 
      ? this.structureToPath(structure.parent) + structure.route
      : structure.route
  }

  private initializeStructure(): Structure {
    const structure: Structure = {
      route: "",
      children: {}
    }

    const blogStructure: Structure = {
      route: "/blog",
      children: {},
      parent: structure
    }

    for (const post of Object.keys(postsFull)) {
      blogStructure.children[post] = {
        route: `/${post}`,
        children: {},
        parent: blogStructure
      }
    }
    structure.children.blog = blogStructure
    return structure;
  }
}
