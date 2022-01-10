const auth = require("cloudcms-server/middleware/authentication/authentication");      

var exports = module.exports = function(app, gitanaConfig) {

    // home page
    app.get("/", auth.filter("custom", { "guest": true }), function(req, res, next) {

        var username = "Guest";
        if (req.user) {
            username = req.user.name;
        }

        var html = ' \
            <div> \
                <h1>Home Page</h1> \
                <p>Hello ' + username + '</p> \
                <a href="/protected">Access Protected Resource</a> \
        ';

        if (req.user) {
            html += '<br/><a href="/auth/custom/logout">Log Out</a>';
        } else {
            html += '<br/><a href="/auth/custom">Log In</a>';
        }

        html += "</div>";
        
        res.type("text/html").status(200).send(html);
    });
    
    // a protected route
    // if the user isn't logged in, redirect to access denied
    app.get("/protected", auth.filter("custom"), function(req, res, next) {
        res.type("text/html").status(200).send("Access to Protected Resource granted - logged in as " + req.user.name);
    });

    // error handleres
    app.use(function(err, req, res, next) {

        if (err.reason === "no_authenticated_user") {
            return res.type("text/html").status(503).send("This resource requires an authenticated user");
        }
        
        res.type("text/html").status(503).send("An error occurred - reason: " + err.reason);
    });
    
};