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
NODE_ID=

# request the access token
ACCESS_TOKEN_REQUEST_RESPONSE=$(curl -X POST -u "$CLIENT_KEY:$CLIENT_SECRET" --data-urlencode "grant_type=password" --data-urlencode "username=$USERNAME" --data-urlencode "password=$PASSWORD" "$BASE_URL/oauth/token")
ACCESS_TOKEN=$(echo $ACCESS_TOKEN_REQUEST_RESPONSE | jq -r '.access_token')

# download node attachment to file
curl --output "default.jpg" -X GET -H "Content-Type: application/json" -H "Authorization: bearer $ACCESS_TOKEN" "$BASE_URL/repositories/$REPOSITORY_ID/branches/$BRANCH_ID/nodes/$NODE_ID/attachments/default"
echo

