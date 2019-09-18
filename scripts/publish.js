const ghpages = require("gh-pages");

ghpages.publish("build", {
  user: {
    name: "Tanner Barlow",
    email: "tanner.barlow.dev@gmail.com"
  },
  message: "Auto-generated commit to publish GitHub page",
  repo: "https://" + process.env.GITHUB_ACCESS_TOKEN + "@github.com/tbarlow12/personal-website-beta.git",
  silent: true
},(err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.log("Deployed successfully");
  }
});