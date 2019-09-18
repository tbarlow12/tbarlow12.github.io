const ghpages = require("gh-pages");

ghpages.publish("build", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Deployed successfully");
  }
})