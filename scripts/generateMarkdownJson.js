const fs = require("fs");
const { join } = require("path")
const grayMatter = require("gray-matter");
const md5 = require("md5.js");

const root = join(__dirname, "..");
const sourcePath = join(root, "content");

const sourceBlogPath = join(sourcePath, "blog", "posts");
const sourcePagesPath = join(sourcePath, "pages");

const destContentPath = join(root, "src", "content");
const destBlogPath = join(destContentPath, "blog");
const destPagesPath = join(destContentPath, "pages");

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
        ...new grayMatter(file.content.match(/---.*---/gs)[0])
      }
    }))
  );
}

function generateFullFiles(files, destPath, separate = false) {
  const fullFiles = {}

  files.forEach((file) => {
    const gm = grayMatter(file.content);
    const path = gm.data.path;
    if (!separate) {
      fullFiles[path] = gm;
    } else {
      const name = file.name;
      const filename = name.substr(0, name.indexOf("."));
      fs.writeFileSync(
        join(destPath, `${filename}.json`),
        JSON.stringify(gm)
      );
    }
  });

  if (!separate) {
    fs.writeFileSync(
      destPath,
      JSON.stringify(fullFiles)
    );
  }  
}

function getBlogPosts() {
  return getFiles(sourceBlogPath);
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

const pages = getFiles(sourcePagesPath);
generateFullFiles(pages, destPagesPath, true);
