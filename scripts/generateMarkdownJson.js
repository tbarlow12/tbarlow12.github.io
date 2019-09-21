const fs = require("fs");
const { join } = require("path")
const grayMatter = require("gray-matter");
const md5 = require("md5.js");

const markdownPath = join(
  process.cwd(),
  "markdown"
);

function getFiles(path) {
  const files = fs.readdirSync(path);

  return files.map((filename) => {
    return {
      name: filename,
      content: fs.readFileSync(join(path, filename))
        .toString()
    }
  });
}

function getPages() {
  return getFiles(join(markdownPath, "pages"));
}

function getBlogPosts() {
  return getFiles(join(markdownPath,"blog","posts"));
}

function generatePreviewFiles(files, destPath) {
  fs.writeFileSync(
    destPath,
    JSON.stringify(files.map((file) => {
      return {
        ...file,
        content: file.content.match(/---.*---/gs)[0]
      }
    }))
  );
}

function generateBlogPostPreviews(posts) {
  generatePreviewFiles(posts, join(
    process.cwd(),
    "src",
    "content",
    "blog",
    "posts-preview.json"
  ));  
}

function generateFullFiles(files, destPath) {
  const fullFiles = {}

  files.forEach((file) => {
    const gm = grayMatter(file.content);
    const path = gm.data.path;
    fullFiles[path] = file
  });

  fs.writeFileSync(
    destPath,
    JSON.stringify(fullFiles)
  );
}

function generateBlogPostFull(posts) {
  generateFullFiles(posts, join(
    process.cwd(),
    "src",
    "content",
    "blog",
    "posts-full.json"
  ));
}

function generatePageMarkdown(pages) {
  generateFullFiles(pages, join(
    "src",
    "content",
    "pages",
    "pages.json"
  ))
}

const posts = getBlogPosts();
generateBlogPostPreviews(posts);
generateBlogPostFull(posts);

const pages = getPages();
generatePageMarkdown(pages);
