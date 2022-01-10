const server = require("cloudcms-server/server");

const gitanaConfig = require("./gitana.json");

// set which example authentication strategy to use
var example = "jwt";
//var example = "session";
//var example = "facebook";

// logging on startup
server.report(function(callback) {
    console.log("Web Server: http://localhost:" + process.env.PORT);
    console.log("");
    callback();
});

// register some routes
server.routes(function(app, callback) {
    require("./routes/auth-server")(app, gitanaConfig);
    require("./routes/resource-server")(app, gitanaConfig);
    callback();
});

// to run the server using JWT, uncomment this
require("./scenarios/" + example + "/setup")(server);
