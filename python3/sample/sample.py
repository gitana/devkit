from cloudcms import CloudCMS
 
# Connect to Cloud CMS
client = CloudCMS()
platform = client.connect(filename="gitana.json")
 
# List repositories
repositories = platform.list_repositories()
 
# Read repository
repository = platform.read_repository('<repository_id>')
 
# List branches
branches = repository.list_branches()
 
# Read branch
branch = repository.read_branch('<branch_id>')
 
# Read Node
node = branch.read_node('<node_id>')
 
# Create node
obj = {
    'title': 'Twelfth Night',
    'description': 'An old play'
}
newNode = branch.create_node(obj)
 
# Query nodes
query = {
    '_type': 'store:book'
}
pagination = {
    'limit': 2
}
queried_nodes = branch.query_nodes(query, pagination)
 
# Search/Find nodes
find = {
    'search': 'Shakespeare',
    'query': {
        '_type': 'store:book'
    }
}
searched_nodes = branch.find_nodes(find)