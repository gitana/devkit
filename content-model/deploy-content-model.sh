#!/bin/sh

# import this example content model to you Cloud CMS project
# uses cloudcms-packager similar to the example in the ../packager/sample folder

NOW=$(date +"%m-%d-%Y-%H-%M-%S")

GROUP=devkit
ARTIFACT=content-model
VERSION=$NOW
REPOSITORY_ID="<repositoryID>"

BRANCH_ID="master"

npm install --no-audit --no-fund -g cloudcms-cli
. ./cloudcms-login.sh

echo "*******************************"
echo "** create archive package file for import"
node ./package.js $GROUP $ARTIFACT $VERSION

echo "*******************************"
echo "** upload archive package"
cloudcms archive upload --group $GROUP --artifact $ARTIFACT --version $VERSION

echo "*******************************"
echo "** import archive package to branch"
cloudcms branch import --group $GROUP --artifact $ARTIFACT --version $VERSION --repository $REPOSITORY_ID --branch $BRANCH_ID

