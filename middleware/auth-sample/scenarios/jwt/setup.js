const auth = require("cloudcms-server/middleware/authentication/authentication");      

module.exports = function(server)
{
    server.init(function(app, callback) {
        auth.registerAuthenticator("custom-authenticator", require("./authenticator"));
        callback();
    });
    
    var config = {
        "welcome": {
            "enabled": false
        },
        "auth": {
            "enabled": true,
            "adapters": {
                "jwt1": {
                    "type": "jwt",
                    "config": {
                        "cookie": "jwt_cookie",
                        "secret": "jwt_secret",
                        "field": "unique_name"
                    }
                }
            },
            "providers": {
                "local1": {
                    "type": "local"
                }
            },
            "authenticators": {
                "custom1": {
                    "type": "custom-authenticator",
                    "config": {
                        "cookie": "jwt_cookie",
                        "secret": "jwt_secret"
                    }
                }
            },
            "strategies": {
                "custom": {
                    "provider": "local1",
                    "adapter": "jwt1",
                    "authenticator": "custom1",
                    "autoRegister": true,
                    "userSyncErrorHandler": function(err, req, res, next) {                     
                        console.log(err);
                        res.status(501).end();
                    }
    
                }
            }        
        }
    };

    server.start(config);
};