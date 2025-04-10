#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# create a fresh git repo in the dist folder
git init
git add -A
git commit -m "Deploy to GitHub Pages"

# push to the gh-pages branch
git push -f https://github.com/Psychohacker7/VaroSync.git master:gh-pages

cd -

echo "Deployment completed!" 