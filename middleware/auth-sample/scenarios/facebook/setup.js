module.exports = function(server) {

    var config = {
        "welcome": {
            "enabled": false
        },
        "session": {
            "enabled": true
        },
        "auth": {
            "enabled": true,
            "adapters": {
                "session1": {
                    "type": "session"
                }
            },
            "authenticators": {
                "authenticator1": {
                    "type": "session"
                }
            },
            "providers": {
                "facebook1": {
                    "type": "facebook",
                    "config": {
                        "appId": process.env.FACEBOOK_APP_ID,
                        "appSecret": process.env.FACEBOOK_APP_SECRET
                    }
                }
            },
            "strategies": {
                "custom": {
                    "adapter": "session1",
                    "authenticator": "authenticator1",
                    "provider": "facebook1",
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