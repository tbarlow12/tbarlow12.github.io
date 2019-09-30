import { Manifest } from "./manifest";
import { icons } from "../scss/icons"
import { BlogPage } from "./pages/blogPage"

export function registerPages(): Manifest {
  const manifest = new Manifest({
    title: "About Me",
    name: "home",
    path: "/",
    icon: icons.home,
    children: [
      {
        title: "Blog",
        name: "blog",
        path: "/blog",
        icon: icons.blog,
        component: BlogPage,
      }
    ]
  });

  return manifest;
}