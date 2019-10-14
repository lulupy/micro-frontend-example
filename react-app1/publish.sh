#!/bin/zsh
PUBLIC_URL="/apps/react-app1" yarn build
cp -rf build ../main-app/apps
rm -rf ../main-app/apps/react-app1
mv ../main-app/apps/build ../main-app/apps/react-app1
rm -rf ../main-app/apps/build
