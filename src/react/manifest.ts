import { DefaultPage, PageType } from "./pages/defaultPage";

export interface ManifestOptions {
  title: string;
  name: string;
  path: string;
  icon: string;
  pageType?: PageType;
  beforeContent?: any;
  afterContent?: any;
  nonExact?: boolean;
  component?: (...args: any[]) => any;
  children?: ManifestOptions[];
}

export class Manifest {
  private children: Manifest[];

  public constructor (private options: ManifestOptions, private parent?: Manifest) {
    if (!options.component) {
      this.options.component = DefaultPage(
        options.pageType || PageType.PAGE,
        options.name,
        options.beforeContent,
        options.afterContent  
      );
    }
    this.children = [];
    if (options.children) {
      this.addChildren(options.children);
    }
  }

  public getOptions(): ManifestOptions {
    return this.options;
  }

  public getPath(): string {
    return this.options.path;
  }

  public getExact(): boolean {
    return !this.options.nonExact;
  }

  public getComponent() {
    return this.options.component;
  }

  public getParent(): Manifest {
    return this.parent;
  }

  public getChildren(): Manifest[] {
    return this.children;
  }

  private addChildren(childOptions: ManifestOptions[]) {
    for (const child of childOptions) {
      this.children.push(new Manifest(child, this))
    }
  }
}