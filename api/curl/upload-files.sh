#!/bin/bash

BASE_URL=https://api.cloudcms.com

# plug in your API keys here
CLIENT_KEY=
CLIENT_SECRET=
USERNAME=
PASSWORD=

# plug in your node information here
REPOSITORY_ID=
BRANCH_ID=master

# request the access token
ACCESS_TOKEN_REQUEST_RESPONSE=$(curl -X POST -u "$CLIENT_KEY:$CLIENT_SECRET" --data-urlencode "grant_type=password" --data-urlencode "username=$USERNAME" --data-urlencode "password=$PASSWORD" "$BASE_URL/oauth/token")
ACCESS_TOKEN=$(echo $ACCESS_TOKEN_REQUEST_RESPONSE | jq -r '.access_token')

# upload two binary files in a single multi-part call
# each binary is image/jpeg and will become the default attachment of a new node of type "n:node"
curl -X POST -H "Content-Type: multipart/form-data" -H "Authorization: bearer $ACCESS_TOKEN" -F "image1=@assets/burns.jpg" -F "image2=@assets/miyagi.jpg" "$BASE_URL/repositories/$REPOSITORY_ID/branches/$BRANCH_ID/nodes"
echo

