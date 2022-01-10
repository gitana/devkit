var server = require("cloudcms-server/server");
var path = require("path");

server.report(function(callback) {

    var cpuCount = require('os').cpus().length;

    // provide some debug info
    console.log("");
    console.log("Bookstore App Started Up");
    console.log("");
    console.log("Node Version: " + process.version);
    console.log("Server Version: " + process.env.CLOUDCMS_APPSERVER_PACKAGE_VERSION);
    console.log("Server Mode: " + process.env.CLOUDCMS_APPSERVER_MODE);
    console.log("Server Base Path: " + process.env.CLOUDCMS_APPSERVER_BASE_PATH);
    console.log("Gitana Scheme: " + process.env.GITANA_PROXY_SCHEME);
    console.log("Gitana Host: " + process.env.GITANA_PROXY_HOST);
    console.log("Gitana Port: " + process.env.GITANA_PROXY_PORT);
    console.log("Temp Directory: " + process.env.CLOUDCMS_TEMPDIR_PATH);
    console.log("CPU Count: " + cpuCount);
    console.log("Store Configuration: " + process.env.CLOUDCMS_STORE_CONFIGURATION);
    console.log("Broadcast Provider: " + process.env.CLOUDCMS_BROADCAST_TYPE);
    console.log("Cache Provider: " + process.env.CLOUDCMS_CACHE_TYPE);
    console.log("LaunchPad Mode: " + process.env.CLOUDCMS_LAUNCHPAD_SETUP);
    console.log("Server mode: " + (process.env.NODE_ENV ? process.env.NODE_ENV : "development"));
    console.log("");
    console.log("Web Server: http://localhost:" + process.env.PORT);
    console.log("");

    callback();
});

server.start({
    "setup": "single",
    "welcome": {
        "enabled": true,
        "file": "index.html"
    },
    "wcm": {
        "enabled": true,
        "cache": false
    },
    "cache": {
        "enabled": true
    },
    "autoRefresh": {
        "log": true
    },
    "perf": {
        "enabled": true,
        "paths": [{
            "regex": "/static/.*",
            "cache": {
                "seconds": 300
            }
        }]
    }
});







