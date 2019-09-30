import { DefaultPage } from "./pages/defaultPage";

export interface ManifestOptions {
  title: string;
  name: string;
  path: string;
  nonExact?: boolean;
  component?: () => any;
  childPaths?: string[];
  icon?: string;
}

export class Manifest {
  private children: Manifest[];

  public constructor (private options: ManifestOptions, private parent?: Manifest) {
    if (!options.component) {
      this.options.component = DefaultPage(options.name);
    }
  }

  public getPath(): string {
    return this.options.path;
  }

  public getExact(): boolean {
    return this.options.nonExact;
  }

  public getComponent() {
    return this.options.component;
  }

  public addChildren(childOptions: ManifestOptions[]) {
    for (const child of childOptions) {
      this.children.push(new Manifest(child, this))
    }
  }
}