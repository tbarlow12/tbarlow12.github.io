const fs = require("fs");
const { join } = require("path")
const grayMatter = require("gray-matter");
const md5 = require("md5.js");

const sourcePath = join(
  process.cwd(),
  "blog",
  "posts"
);

const destPath = join(
  process.cwd(),
  "src",
  "blog"
)

const files = fs.readdirSync(sourcePath);

const posts = files.map((filename) => {
  return {
    name: filename,
    content: fs.readFileSync(join(sourcePath, filename))
      .toString()
  }
});

fs.writeFileSync(
  join(destPath, "posts-preview.json"),
  JSON.stringify(posts.map((post) => {
    return {
      ...post,
      content: post.content.match(/---.*---/gs)[0]
    }
  }))
);

const fullPosts = {}

posts.forEach((post) => {
  const gm = grayMatter(post.content);
  const path = (gm.data.path) 
    ? gm.data.path 
    : new md5().update(gm.data.title).digest("hex").substr(0, 8);
  fullPosts[path] = post
});

fs.writeFileSync(
  join(destPath, "posts-full.json"),
  JSON.stringify(fullPosts)
);