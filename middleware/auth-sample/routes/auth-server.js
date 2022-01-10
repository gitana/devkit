const jsonwebtoken = require("jsonwebtoken");

var authcodeName = process.env.AUTHCODE_NAME || "authcode";
var authcodeSecret = process.env.AUTHCODE_SECRET || "authcodeSecret";
var authcodeIssuer = process.env.AUTHCODE_ISSUER || "authcodeIssuer";

var exports = module.exports = function(app, gitanaConfig) {

    // login page
    app.get("/login", function(req, res, next) {
        var html = ' \
            <form method="post" action="/login-handler"> \
                <label for="username">Username</label><br/><input type="text" id="username" name="username"><br/> \
                <label for="password">Password</label><br/><input type="text" id="password" name="password"><br/> \
                <input type="submit">\
            </form> \
        ';
        res.type("text/html").status(200).send(html);
    });

    // login handler
    app.post("/login-handler", function(req, res, next) {

        var username = req.body["username"];
        var password = req.body["password"];

        if (!username) {
            console.log("Missing username");
            return res.redirect("/login");
        }

        if (!password) {
            console.log("Missing password");
            return res.redirect("/login");
        }

        // try to connect as the user using their username/password
        Gitana.connect({
            "clientKey": gitanaConfig.clientKey,
            "clientSecret": gitanaConfig.clientSecret,
            "username": username,
            "password": password
        }, function(err) {

            if (err) {
                // did not work, should relay error message
                console.log("Login failed", err);
                return res.redirect("/login");
            }

            var payload = {
                "profile": {
                    "unique_name": username,
                    "preferred_username": username
                }
            };

            var authInfo = this.getDriver().getAuthInfo();
            if (authInfo.user) {
                if (authInfo.user.firstName) {
                    payload.profile["given_name"] = authInfo.user.firstName;
                }
                if (authInfo.user.lastName) {
                    payload.profile["family_name"] = authInfo.user.lastName;
                }
                if (authInfo.user.email) {
                    payload.profile["email"] = authInfo.user.email;
                }
            }

            var authcode = jsonwebtoken.sign(payload, authcodeSecret, {
                "issuer": authcodeIssuer
            });

            // redirect to auth callback
            res.redirect("/auth/custom/callback?" + authcodeName + "=" + authcode);
        });
    });

};