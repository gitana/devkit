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

# first create a node of type "n:node"
CREATE_NODE_RESPONSE=$(curl --request POST --data "@assets/miyagi.json" -H "Content-Type: application/json" -H "Authorization: bearer $ACCESS_TOKEN" "$BASE_URL/repositories/$REPOSITORY_ID/branches/$BRANCH_ID/nodes")
echo
echo Create Node Response: $CREATE_NODE_RESPONSE
echo
CREATED_NODE_ID=$(echo $CREATE_NODE_RESPONSE | jq -r '._doc')

# upload binary file as default attachment of the newly created node
UPLOAD_ATTACHMENT_RESPONSE=$(curl --request POST --data-binary "@assets/miyagi.jpg" -H "Content-Type: image/jpeg" -H "Authorization: bearer $ACCESS_TOKEN" "$BASE_URL/repositories/$REPOSITORY_ID/branches/$BRANCH_ID/nodes/$CREATED_NODE_ID/attachments/default")
echo
echo Upload Default Attachment Response: $UPLOAD_ATTACHMENT_RESPONSE
echo