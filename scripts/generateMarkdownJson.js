const fs = require("fs");
const { join } = require("path")
const grayMatter = require("gray-matter");
const md5 = require("md5.js");

const soruceBlogPath = join(__dirname, "..", "blog", "posts");
const destContentPath = join(__dirname, "..", "src", "content");
const destBlogPath = join(destContentPath, "blog");

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

function getBlogPosts() {
  return getFiles(soruceBlogPath);
}

function generateBlogPostPreviews(posts) {
  generatePreviewFiles(posts, join(
    destBlogPath,
    "posts-preview.json"
  ));  
}



function generateBlogPostFull(posts) {
  generateFullFiles(posts, join(
    destBlogPath,
    "posts-full.json"
  ));
}

const posts = getBlogPosts();
generateBlogPostPreviews(posts);
generateBlogPostFull(posts);
