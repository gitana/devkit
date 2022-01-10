# Custom Authentication Examples

Provides examples of how to introduce custom authentication using the Cloud CMS Application Server.

This is a single web application with multiple authentication scenarios available to test.

A single strategy called `custom` is defined.  It employs a different combination of custom components to implement
the scenarios, depending on which is selected.

The login process is initiated by going to `/auth/custom`.  This redirects to the Authorization Server which
authenticates the user and then passes an auth code back to the callback (`/auth/custom/callback`).

The authenticated user state is either stored statelessly (using JWT) or statefully (using Sessions).

## Web Application
 
The web application separates the concept of a Resource Server from an Authorization Server.

### Resource Server

The Resource Server registers routes that serve resources.  Some of these routes may be protected to only permit access for authenticated users (or potentially users with specific access rights though this is not demonstrated here).  

The following routes are defined:

- `/` - the home page (accessible by all)
- `/protected` - a protected resource (only accessible by an authenticated user) 

These routes are defined in `routes/resource-server.js`.

### Authorization Server

The Authorization Server authenticates the user with form-based authentication.  

The following routes are defined:

- `/login` - a login page (accessible by all)
- `/login-handler` - handles POST processing of the form

These routes are contained in `routes/auth-server.js`.

## Scenarios

There are 3 example scenarios included - these are:

- `jwt` - stateless JWT authentication using a local provider (login page)
- `session` - stateful session authentication using a local provider (login page)
- `facebook` - stateful session authentication using Facebook 

You can choose which scenario to test out by making an adjustment to the `app.js` file.

### JWT

The JWT scenario uses a custom Authenticator to manage a JWT cookie on `login()` and `logout()`.  When the callback
is received, a JWT cookie is written.  When a user logs out, the JWT cookie is cleaned up.

The JWT cookie stores 100% of the user information and authenticate state.  It is encrypted using a shared key and
issuer so that it can only be read by the Application Server (which also wrote the cookie).

As such, each request is considered unauthenticated at first.  The JWT adapter (provided out of the box) picks up the 
JWT cookie and unpacks it.  The profile contained within is trusted and the user is loaded and synchronized (the first time).
On all subsequent requests, the user is acquired from cache.

A `local` Authentication Provider is used (routing to the Authentication Server's `/login` route).

### Session

The Session scenario enables session via config (`session.enabled = true`).  It uses the `session` authenticator to 
store the logged in user profile into the session and the `session` adapter to retrieve this profile on every request.

As such, the authenticated user profile is stored in a server-side session.  A cookie is written to the browser that
serves as a key for the session (so each request can determine which session to use).  This is part of Node Express.
However, this cookie doesn't contain any user profile state (as was the case with JWT).  All user profile state is
stored in the session itself.

A `local` Authentication Provider is used (routing to the Authentication Server's `/login` route).

### Facebook

The Facebook scenario enables session via config (`session.enabled = true`).  It uses the `session` authenticator to 
store the logged in user profile into the session and the `session` adapter to retrieve this profile on every request.

Similar to the Session scenario, the user profile is stored in the server-side session.

A `facebook` Authentication Provider is used to redirect to Facebook for authentication.

To use this scenario, you must set the following environment variables:

    FACEBOOK_APP_ID
    FACEBOOK_APP_SECRET
    
These must be set ahead of running the app.

## Installation

To install this example, please do the following:

### Create a Superuser

First, we will create a superuser that the application will authenticate as.  This user will have manager rights
across multiple projects.

1. Using the administration console, create a user in the primary domain called "superuser"
2. Using admin console, create a Team called "superusers" that grants the `manager` role
3. Put the "superuser" onto that Team

### Create API Keys for Superuser

We will now create a set of API Keys to authenticate as the superuser.

4. Using admin console, go to Clients and create a Client called "Superuser Client"
5. Using admin console, go to Authorization Grants and create an AUth Grant called "Superuser Auth Grant" that points to the "superuser" user and mark it as an "API Key Set"

### Get the Superuser API Keys

6. Using main UI, go to Manage Platform > API Keys and download gitana.json.

Copy this `gitana.json` into the root of this project.

Then run `npm install` and `node app`.  This will start up on port 2999.  Use the `PORT` environment
variable to adjust this.

