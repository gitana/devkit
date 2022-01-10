# Custom Remote Action Example using IFrame

This example demonstrates a custom UI action that uses an IFRAME to pull in a user interface that is implemented on a
remote server.

To run this example, you must deploy the module located in the `module` directory to your UI Server.

You must also run the code located in the `server` directory separately using `npm` and hosting it on port 3000.

This provides the implementation for three actions: 

- `create-product`
- `edit-product`
- `delete-product`

Once the module is deployed to your UI server, these actions will be available.  Each action connects to the `server` 
using an IFRAME to surface functionality.  JavaScript notifications are used to communicate back to the parent UI
frame.  

The endpoint invocation additionally receives information (such an Access Token) to allow the remote endpoint to 
connect and retrieve information on behalf of the current user.  Developers have control over both sides of the
action (client and server) and can therefore decide whether to perform API updates within UI Server code or via
driver code running on the remote endpoint. 
