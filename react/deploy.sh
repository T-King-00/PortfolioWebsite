﻿#!/bin/bash
echo "merging reach branch...."
git merge react

echo "building react project reach branch...."
cd react
npm run build
cd ..

echo "**Tracking all files......"
git add .
git add react/dist -f


echo "**Commiting with empty msg........"
git commit --allow-empty-message || echo "err"
echo "***Pushing to remote repo..........."
git push origin deployment

echo "***Pushing react/dist to deploymentWeb branch........."
git fetch origin
git push --force-with-lease origin $(git subtree split --prefix react/dist):deploymentWeb

echo "Done all steps.......! "