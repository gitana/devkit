# Next JS Static Sample Site Example

This is an sample website which uses Cloud CMS as a data source and generates a static web site.  The static site
can either be run by itself or you can run it inside of Next itself.

This sample further demonstrates how to utilize Preview Mode to allow your editors to preview changes to content
on their editoiral branches.

Finally, this sample demonstrates how to automatically track Page Renditions at build time.  Page Renditions record
which pieces of content are rendered on which pages.  This allows your editors to make changes to content and
see how to appears on different places within the web site.

This example is not intended for production use, but rather to demonstrate how Cloud CMS might integrate with your
own Next JS applications.

## Prerequisites

1. Run `npm install` within your `nextjs/bookstore` directory.

## Configuration

Go into your `nextjs/bookstore` directory and do the following.

1. Add your `gitana.json` file. For information on how to retrieve this see: https://www.cloudcms.com/apikeys.html

## Run

To run Next with a development server, run `npm run dev`. This will serve at http://localhost:3000

To make a production ready build that will run with a server, run `npm run build`. You can then run the next server  `npm run start`, which will serve at http://localhost:3000,

To build and export a static build, run `npm run export`. You can then run the next static server for the generated `out`, which you can serve with any static file server.

## Preview Mode

This sample site provides an example usage of Next's [Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode).

If running Next on a server, the route `/api/preview` is provided, which takes the following query parameters:

- url - URL to be preview which will be redirected to
- repository - optional repository id for content
- branch - optional branch id for content

Requests that run in Preview Mode will fetch fresh content from the Cloud CMS API.  
This allows your editorial users to preview changes to their content on the live web site.

Preview mode will persist for the remainder of the browser session by default, and this can be configured in Next.js

If you wish to preview a different working branch (such as an editorial draft branch), you can supply the `branch`
identifier like this:

```
http://localhost:3000/api/preview?url={{url}}&branch={{branch.id}}
```

Where `branch.id` is the ID of the branch you wish to preview, and `url` is the path to the page you want to preview (like `/`).

Cloud CMS provides editorial integration from workspaces to preview servers.  As such, this sample site can be configured
as a Cloud CMS Preview Endpoint using the URL as shown.

```
http://localhost:3000/api/preview?url={{url}}&branch={{branch.id}}
```

You can configure cloudcms to provide preview links by setting up a  [preview server](https://www.cloudcms.com/documentation/publishing/preview-servers.html)! 
Follow the instructions to setup a URL preview server with http://localhost:3000 as the url, then when you click "View On [My Server]" above a content item, you can view how that content will look in-context on your site.
