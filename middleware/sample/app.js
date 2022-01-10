var server = require("cloudcms-server/server");

// register any routes here
server.routes(function(app, callback) {
    app.get("/content/:id", function(req, res, next) {

        // query the Cloud CMS project's content repository branch ('master' by default)
        req.branch(function(err, branch) {

            // query for nodes by type
            // branch.readNode(req.param.id).then(function() {
            //     res.json(this);
            // });

            branch.queryNodes({
                _doc: req.params.id
            },{
                limit: 1
            }).then(function() {
                res.json(this.asArray());
            });

        });
        // res.json({});
    });

    app.get("/content", function(req, res, next) {

        // query the Cloud CMS project's content repository branch ('master' by default)
        req.branch(function(err, branch) {

            // query for nodes by type
            branch.queryNodes({
                "_type": "n:node"
            },{
                limit: 5
            }).then(function() {
                res.json(this.asArray());
            });

        });
    });

    // fire this when you're done setting up routes
    callback();
});


// report
server.report(function (callback) {

    console.log("");
    console.log("Cloud CMS Application Server running on port: " + process.env.PORT);
    console.log("");

    callback();

});

// start the server
server.start(
    {
        "admin": {
            "enabled": true
        },
        "cache": {
            "enabled": false
        }
    }
);