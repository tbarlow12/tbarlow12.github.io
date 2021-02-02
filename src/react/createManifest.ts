// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Manifest, ManifestOptions } from "./manifest";
import { icons } from "../scss/icons"
import { BlogPage } from "./pages/blogPage"
import { BlogPostPage } from "./pages/blogPostPage";
import postsFull from "../content/blog/posts-full.json";

export const appManifest = createManifest();

function createManifest(): Manifest {
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
        children: Object.keys(postsFull).map((postName) => {
          const options: ManifestOptions = {
            title: "Blog Post",
            name: postName,
            path: "/blog/:blogPost",
            component: BlogPostPage,
            icon: icons.none,
            nonExact: true
          }
          return options;
        })
      },
      {
        title: "Projects",
        name: "projects",
        path: "/projects",
        icon: icons.code,
      },
      {
        title: "Resume",
        name: "resume",
        path: "/resume",
        icon: icons.resume
      },
      {
        title: "Interests",
        name: "interests",
        path: "/interests",
        icon: icons.basketball
      },
      {
        title: "Books",
        name: "books",
        path: "/books",
        icon: icons.book
      }
    ]
  });

  return manifest;
}