#!/bin/zsh
yarn build
cp -rf dist ../main-app/apps
rm -rf ../main-app/apps/vue-app1
mv ../main-app/apps/dist ../main-app/apps/vue-app1
rm -rf ../main-app/apps/dist
