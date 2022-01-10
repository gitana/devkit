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
            "providers": {
                "local1": {
                    "type": "local"
                }
            },
            "authenticators": {
                "authenticator1": {
                    "type": "session"
                }
            },
            "strategies": {
                "custom": {
                    "provider": "local1",
                    "adapter": "session1",
                    "authenticator": "session1",
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