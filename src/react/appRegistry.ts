import { Manifest } from "./manifest";
import { icons } from "../scss/icons"
import { BlogPage } from "./pages/blogPage"
import { BlogPostPage } from "./pages/blogPostPage";

export const manifest = registerPages();

function registerPages(): Manifest {
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
        children: [
          {
            title: "Blog Post",
            name: "blogPost",
            path: "/blog/:blogPost",
            nonExact: true,
            component: BlogPostPage,
            icon: icons.none
          }
        ]
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