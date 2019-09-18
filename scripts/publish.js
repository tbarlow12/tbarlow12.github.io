const ghpages = require("gh-pages");

ghpages.publish("build", {
  repo: "https://" + process.env.GITHUB_TOKEN + "@github.com/tbarlow12/personal-website-beta.git",
  silent: true  
},(err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Deployed successfully");
  }
});