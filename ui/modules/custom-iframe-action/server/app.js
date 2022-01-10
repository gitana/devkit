const Gitana = require("gitana");

const express = require("express");
const app = express();

var helpers = require('handlebars-helpers')();

// set up view engine (handlebars)
var hbs = require("express-handlebars").create({
    "extname": ".hbs",
    "defaultLayout": "main",
    "helpers": helpers
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

//var baseURL = null;
var baseURL = "http://localhost:8080";


/**
 * Helper function to read a node back from the Cloud CMS API.
 *
 * @param ticket
 * @param nodeRef
 * @param callback
 */
var readNode = function(ticket, nodeRef, callback) {

    var connectConfig = {
        "ticket": ticket
    };

    // allow the API base URL to be changed
    if (baseURL) {
        connectConfig.baseURL = baseURL;
    }

    // connect to the Cloud CMS API and read the node
    Gitana.connect({
        "ticket": ticket,
        "baseURL": baseURL
    }, function(err) {

        if (err) {
            return callback(err);
        }

        // note: this = platform

        // read the node by reference
        this.referenceReads([{
            "ref": nodeRef
        }], function(entries) {

            var node = entries[0].entry;

            callback(null, node);
        });
    });
};

/**
 * The "create-product" action route that surfaces a form allowing the user to create a new product.
 */
app.get("/create", function(req, res) {

    // this we acquire from our custom "create-product" action
    var authorName = req.query["username"];
    res.render("create", {
        "page": {
            "title": "Create Product"
        },
        "node": {
            "authorName": authorName
        }
    });
});

/**
 * The "edit-product" action route that surfaces a form allowing the user to edit an existing product.
 */
app.get("/edit", function(req, res) {

    var ticket = req.query["ticket"];
    var nodeRef = req.query["node"];

    // read the existing node and load it onto the model
    readNode(ticket, nodeRef, function(err, node) {

        if (err) {
            return res.next(err);
        }

        res.render("edit", {
            "page": {
                "title": "Edit Product"
            },
            "node": JSON.parse(JSON.stringify(node))
        });

    });
});

/**
 * The "delete-product" action route that surfaces a form allowing the user to confirm they'd like to delete
 * an existing product.
 */
app.get("/delete", function(req, res) {

    var ticket = req.query["ticket"];
    var nodeRef = req.query["node"];

    // read the existing node and load it onto the model
    readNode(ticket, nodeRef, function(err, node) {

        if (err) {
            return res.next(err);
        }

        res.render("delete", {
            "page": {
                "title": "Delete Product"
            },
            "node": JSON.parse(JSON.stringify(node))
        });

    });
});

// bind to port 3000
app.listen(3000, function() {
    console.log("Example app listening on port 3000!");
});