BASE_URL=https://api.cloudcms.com

# plug in your API keys here
CLIENT_KEY=
CLIENT_SECRET=
USERNAME=
PASSWORD=
APPLICATION=
BRANCH=master
QUERY='{"_type":"n:node"}'

# request the access token
ACCESS_TOKEN_REQUEST_RESPONSE=$(curl -X POST -u "$CLIENT_KEY:$CLIENT_SECRET" --data-urlencode "grant_type=password" --data-urlencode "username=$USERNAME" --data-urlencode "password=$PASSWORD" "$BASE_URL/oauth/token")
ACCESS_TOKEN=$(echo $ACCESS_TOKEN_REQUEST_RESPONSE | jq -r '.access_token')
PROJECT=$(curl -v -X GET -H "Content-Type: application/json" -H "Authorization: bearer $ACCESS_TOKEN" "$BASE_URL/applications/$APPLICATION" | jq -r '.projectId')
STACK=$(curl -v -X GET -H "Content-Type: application/json" -H "Authorization: bearer $ACCESS_TOKEN" "$BASE_URL/stacks/find/application/$APPLICATION" | jq -r '._doc')
REPOSITORY=$(curl -v -X POST -H "Content-Type: application/json" -H "Authorization: bearer $ACCESS_TOKEN" --data '{"datastoreTypeId":"repository"}' "$BASE_URL/stacks/$STACK/datastores/query" | jq -r '.rows[0].datastoreId')
NODE=$(curl -v -X POST -H "Content-Type: application/json" -H "Authorization: bearer $ACCESS_TOKEN" --data "$QUERY" "$BASE_URL/repositories/$REPOSITORY/branches/$BRANCH/nodes/query?limit=1" | jq -r '.rows[0]._doc')

# touch the node
$(curl -v -X POST -H "Content-Type: application/json" -H "Authorization: bearer $ACCESS_TOKEN" "$BASE_URL/repositories/$REPOSITORY/branches/$BRANCH/nodes/$NODE/touch")

# show repositories json
echo $NODE
echo

