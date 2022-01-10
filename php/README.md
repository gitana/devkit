# Cloud CMS PHP Connect and CRUD Example

Here you will find examples of how you can use PHP to connect to Cloud CMS.
Connecting to Cloud CMS generally involves doing the OAuth 2.0 dance.  It's a handshake between your client code,
the user and the backend API.

There a few different ways to do this dance - it's covered in much greater detail here:

    https://www.cloudcms.com/documentation/api/authentication
    
There are several different "flows" that you can use to connect to Cloud CMS.  The most secure is the
"authorization code" flow which requires a few different redirects and some token and code exchanges in order
to achieve it.  Cloud CMS supports this as do many PHP OAuth 2.0 clients.

## The "password" flow

A more simple flow is the "password" flow which does everything in one fell swoop.  The password flow is also
referred to as the Resource Owner flow.  It is a safe and secure choice, in general, provided that your code
runs server-side or is compiled.  In the PHP world, this is often the case as PHP often serves as a means
for providing the application server in the three tier architecture.  The application server is server-side and
generally within your control, preventing important "secret" tokens from leaking out into the public.

As such, this folder provides an example of connecting to Cloud CMS using the resource owner "password" flow.
You will find this in the `driver.php` file.

## Building

This folder uses Composer to manage the third-party dependency that it relies on.  There's just one and this is the
PHP League's OAuth 2.0 client:

    https://github.com/thephpleague/oauth2-client
    
There are a bunch of good OAuth 2.0 clients for PHP.  We just happened to choose this one.  Cloud CMS uses OAuth 2.0
straight up, lock, stock and barrel, so you should have no trouble connecting.  The sample code provided here
can be looked to as a reference for some of the basic ideas.

First, begin by grabbing Composer:

    curl -sS https://getcomposer.org/installer | php
    
Then, run Composer to pull in your third-party dependencies.

    php composer.phar install


## The "config" file has API keys information

Go to your Sample Web Application in your Sample Project and grap the API keys information from the gitana.php file and paste the information in the config.php file. Check : https://www.cloudcms.com/developers.html for more information on how to do this.
    
Fill in the values for:

    $clientKey = '';
    $clientSecret = '';
    $username = '';
    $password = '';
    
And then save your changes.

Now to check the connection run :

    php driver.php

Now, you are all set to try the CRUD operations with Cloud CMS

To try this out, you will have to add your RepositoryId and BranchId in the the config.php file.

To Create a node in Cloud CMS with your JSON data, check out the createNode.php example. This file demonstrates how to create a Node and upload an attachment to the Node in Cloud CMS. 

To try it your self run : 

    php createNode.php 

To read a node, add the nodeId in the config.php file and run : 

    php readNode.php 
    
The HTTP client will do the OAuth 2.0 dance and pull back some information about your repositories using the
Cloud CMS API:

    https://api.cloudcms.com/docs
    
It will also show some OAuth 2.0 token information.

