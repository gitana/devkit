var path = require("path");
var fs = require("fs");

module.exports = function(packager, callback)
{
    // package up content type definitions
    addType(packager, "./types/my_article/node.json");
    addType(packager, "./types/my_author/node.json");
    addType(packager, "./types/my_authored_by/node.json");

    // package up articles and authors
    addObjects(packager, "./data/authors.json", "my:author");
    addObjects(packager, "./data/articles.json", "my:article");

    // add attachments for Daenerys and Jon
    addAttachment(packager, "dt", "default", "./data/daenerys_targaryen.jpg");
    addAttachment(packager, "js", "default", "./data/jon_snow.jpg");    
    
    // done
    callback();
};

/**
 *  Adds a specific content type (loaded from disk) to the packager.
 */
var addType = function(packager, filePath)
{
    var json = JSON.parse("" + fs.readFileSync(filePath));
    packager.addNode(json);
};

/**
 *  Adds arrays of JSON objects (loaded from disk) to the packager.
 */
var addObjects = function(packager, filePath, typeQName)
{
    var array = JSON.parse("" + fs.readFileSync(filePath));
    
    array.forEach(function(obj) {
        obj._type = typeQName;
                        
        packager.addNode(obj);
    });  
};

var addAttachment = function(packager, docId, attachmentId, filePath)
{
    packager.addAttachment(docId, attachmentId, filePath);
};