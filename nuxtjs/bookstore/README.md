# Nuxt JS Static Sample Site Example

This is an sample website which uses Cloud CMS as a data source and generates a static web site.  The static site
can either be run by itself or you can run it inside of Nuxt itself.

This sample further demonstrates how to utilize Preview Mode to allow your editors to preview changes to content
on their editoiral branches.

Finally, this sample demonstrates how to automatically track Page Renditions at build time.  Page Renditions record
which pieces of content are rendered on which pages.  This allows your editors to make changes to content and
see how to appears on different places within the web site.

This example is not intended for production use, but rather to demonstrate how Cloud CMS might integrate with your
own Nuxt JS applications.

## Prerequisites

To build this sample, you will need to have Nuxt.js installed.

1. Run `npm install nuxt -g` to install Nuxt globally.
2. Run `npm install` within your `nuxtjs/sample` directory.

## Configuration

Go into your `nuxtjs/sample` directory and do the following.

1. Add your `gitana.json` file. For information on how to retrieve this see: https://www.cloudcms.com/apikeys.html
2. Modify `nuxt.config.js` and fill in the value for your project's `repositoryId`.

## Building

To build out the static web site, simply run:

```
nuxt generate
```

## Running the Sample (with Nuxt)

To run your static site using Nuxt's server, run the following:

```
nuxt start
```

Now open a browser to `http://localhost:3000`.

## Running the Sample (with Web Server)

If you want to run the generated static site within a standard web server, you just need to copy the contents
of the `dist` directory to your web root.

You can try this locally by doing this:

1. Run `npm install http-server -g` to install a global web server.
2. From the command prompt, go into the `dist` directory and run `http-server -p 3000`
3. Navigate to `http://localhost:3000`

## Integration to Cloud CMS

### Cloud CMS Nuxt Module

This sample site pulls in the [https://github.com/gitana/cloudcms-nuxt](Cloud CMS Nuxt Module) to provide build and
render time integration to the Cloud CMS API.

### Cloud CMS JavaScript Driver

The Cloud CMS Nuxt Module instantiates the [https://github.com/gitana/cloudcms-javascript-driver](Cloud CMS JavaScript Driver)
using the credentials provided in your `gitana.json` file.  This driver is then available to your Nuxt files via the
`context.$cloudcms` variable.

## Preview Mode

This sample site supports Nuxt's Preview Mode via the Cloud CMS Nuxt Module. 

If you run this sample site using `nuxt start`, then you have the optional to make requests that run in "Preview Mode".  
Requests that run in Preview Mode will fetch fresh content from the Cloud CMS API.  
This allows your editorial users to preview changes to their content on the live web site.

To enable Preview Mode, you simple add the `preview` request parameter, like this:

```
http://localhost:3000?preview
```

The request will store a cookie into the browser called `cms_preview`.  This puts the browser session itself into
preview mode such that any further clicks will be retrieved in preview mode as well.

If you wish to preview a different working branch (such as an editorial draft branch), you can supply the `branch`
identifier like this:

```
http://localhost:3000?preview&branch={{branch.id}}
```

Where `branch.id` is the ID of the branch you wish to preview.

Cloud CMS provides editorial integration from workspaces to preview servers.  As such, this sample site can be configured
as a Cloud CMS Preview Endpoint using the URL as shown.

```
http://localhost:3000?preview&branch={{branch.id}}
```

## Page Renditions

When you run `nuxt generate`, the build process will automatically connect to your Cloud CMS Application and will
populate Page Renditions for you.

When your Editors click "Preview" on a piece of content, they will be able to see all of the places in the web site
where that piece of content appears.  They can then navigate to the site using instant preview to see their changes
in place.
