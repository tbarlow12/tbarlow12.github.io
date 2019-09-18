const ghpages = require("gh-pages");

ghpages.publish("build", {
  repo: "https://" + process.env.GITHUB_TOKEN + "@github.com/tbarlow12/personal-website-beta.git",
},(err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.log("Deployed successfully");
  }
});