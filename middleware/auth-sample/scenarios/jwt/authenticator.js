const jsonwebtoken = require("jsonwebtoken");

const DefaultAuthenticator = require("cloudcms-server/middleware/authentication/authenticators/default");

class CustomAuthenticator extends DefaultAuthenticator
{
    constructor(req, config)
    {
        super(req, config)
    }

    login(req, res, gitanaUser, callback)
    {
        // if "req.auth_callback_profile" is set, we just authenticated via auth provider callback
        var profile = req.auth_callback_profile;
        if (profile) {

            // write final JWT token to browser
            var payload = {
                "profile": profile
            };
            var token = jsonwebtoken.sign(payload, this.config.secret);
            res.cookie(this.config.cookie, token);
        }

        req.user = gitanaUser;

        callback();
    }

    /** @override **/
    logout(req, res, callback)
    {     
        var self = this;

        super.logout(req, res, function(err) {

            // clear JWT cookie
            res.clearCookie(self.config.cookie);

            req.user = null;

            callback();

        });
    }
}

module.exports = CustomAuthenticator;