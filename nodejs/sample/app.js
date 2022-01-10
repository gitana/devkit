/**
 * Hello World (Express)
 *
 * This Hello World example improves upon the basic Hello World project (in a different directory) by using Express
 * to host a simple web server application.  The web application offers three functions:
 *
 *    a) Create 3 content items
 *    b) Query for content items and display them
 *    c) Delete content items
 *
 * The purpose of this project is to get a better sense of the CRUD operations that Cloud CMS supports.  We can not
 * only query for content, but we can also create it, delete it and work with it in result sets.
 *
 * Jade is used as a templating engine and Express is kept in a pretty minimal configuration.
 *
 * See the README.md file for more information.
 */

var express = require('express');
var path = require('path');
var gitana = require("gitana");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

// some articles relating to programming
var ARTICLE_1 = require("./content/article1.json");
var ARTICLE_2 = require("./content/article2.json");
var ARTICLE_3 = require("./content/article3.json");

// connect to Cloud CMS
// this looks for gitana.json in local directory
gitana.connect(function(err) {

    if (err) {
        console.log("");
        console.log("There was a problem connecting to Cloud CMS");
        console.log(err);
        process.exit();
    }

    // read the master branch
    this.datastore("content").readBranch("master").then(function() {

        // bind controllers
        bindControllers(this, app);

        // start web server
        app.set('port', process.env.PORT || 3000);
        var server = app.listen(app.get('port'), function() {
            console.log("");
            console.log("---------------------------------------------------------");
            console.log("Hello World (Express) is alive and kicking!");
            console.log("");
            console.log("   To create sample content, go to http://localhost:" + server.address().port + "/setup");
            console.log("   To cleanup sample content, go to http://localhost:" + server.address().port + "/teardown");
            console.log("   To view sample content, go to http://localhost:" + server.address().port + "/");
            console.log("");
        });


    });
});

var bindControllers = function(branch, app)
{
    app.get("/setup", function(req, res) {
        Chain(branch).then(function() {

            // delete any previous sample content
            this.queryNodes({
                "example": "helloworld"
            }).del();

            // create sample content
            this.createNode(ARTICLE_1);
            this.createNode(ARTICLE_2);
            this.createNode(ARTICLE_3);

        }).then(function() {
            res.render("setup", {
                "nodes": [ARTICLE_1, ARTICLE_2, ARTICLE_3]
            });
        });
    });

    app.get("/teardown", function(req, res) {
        Chain(branch).queryNodes({
            "example": "helloworld"
        }).del().then(function() {
            res.render("teardown", {
                "nodes": this.asArray()
            });
        });
    });

    app.get("/", function(req, res) {
        Chain(branch).queryNodes({
            "example": "helloworld"
        }).then(function() {
            res.render("index", {
                "nodes": this.asArray()
            });
        });
    });

    // catch 404
    app.use(function(req, res, next) {
        res.render('error', {
            message: "Page not found!",
            error: {status:404, stack:""}
        });
    });

    // error handlers
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
};