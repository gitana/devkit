#!/usr/bin/env ruby
require 'cloudcms'

cloudcms = Cloudcms::Cloudcms.new()
platform = cloudcms.connect()
puts "connected to api server at: #{cloudcms.config['baseURL']}"
# puts 'platform: ' + JSON.pretty_generate(platform.data)
puts "platform id: #{platform.data['_doc']}"

repositories = platform.list_repositories
# puts 'list_repositories: ' + JSON.pretty_generate(repositories)

repository = platform.read_repository(repositories[0].data["_doc"])
# puts 'read_repository: ' + JSON.pretty_generate(repository.data)

branches = repository.list_branches
# puts 'branches: ' + JSON.pretty_generate(branches[0].data)
branch = repository.read_branch(branches[0].data["_doc"])

nodes = branch.query_nodes({_type: 'n:node'}, {limit: 5})
node = branch.read_node(nodes[0]["_doc"])
puts 'node: ' + JSON.pretty_generate(node.data)