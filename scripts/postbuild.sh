rm -rf public
mv build public
git config --global user.name "Tanner Barlow"
git config --global user.email "tanner.barlow.dev@gmail.com"
git remote add authOrigin "https://${GITHUB_ACCESS_TOKEN}@github.com/tbarlow12/tbarlow12.github.io.git",
git add .
git commit -m "Auto-generated build commit"
git push authOrigin master