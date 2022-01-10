# Gatsby JS Static Sample Site Example

Supports Gatsby 3.14

This is an example website which uses Cloud CMS as a data source and generates a Gatsby static site. It uses the Cloud CMS app server as a GraphQL endpoint, but can be configured to directly use the API with a bit more effort. Additionally, this example uses the app server to serve images, but it is recommended that you use a CDN for this in production.

To run, in the gatsbyjs/sample directory:
1. Add your `gitana.json` file. For information on how to retrieve this see: https://www.cloudcms.com/apikeys.html
2. Make sure you have yarn by running `npm i -g yarn`, and then install dependencies by running `yarn`
3. Run `yarn global add gatsby-cli`
4. Run `yarn` to install dependencies
5. Run `gatsby build` to build the static site
6. Run `gatsby serve`
7. Navigate to http://localhost:9000

This example is not intended for production use, but rather to demonstrate how Cloud CMS might integrate with your Gatsby JS application.