// node app.js output-file-path input-json-path group artifact version
const packager = require("cloudcms-packager");
const path = require("path");
const fs = require("fs");

const group = process.argv[2];
const artifact = process.argv[3];
const version = process.argv[4];

packager.create({
    outputPath: "./",
    archiveGroup: group,
    archiveName: artifact,
    archiveVersion: version
}, function(err, packager) {
    if (err) {
        return console.error(err);
    }

    // package up content type definitions
    var typeNode = addType(packager, "./types/custom_attachment/node.json");
    addForm(packager, typeNode, "./types/custom_attachment/forms/master.json")

    var typeNode = addType(packager, "./types/custom_attachment-array/node.json");
    addForm(packager, typeNode, "./types/custom_attachment-array/forms/master.json")

    var typeNode = addType(packager, "./types/custom_attachment1/node.json");

    var typeNode = addType(packager, "./types/custom_datetypes/node.json");
    addForm(packager, typeNode, "./types/custom_datetypes/forms/master.json")

    var typeNode = addType(packager, "./types/custom_dependency/node.json");
    addForm(packager, typeNode, "./types/custom_dependency/forms/master.json")

    var typeNode = addType(packager, "./types/custom_dependency_relator/node.json");
    addForm(packager, typeNode, "./types/custom_dependency_relator/forms/master.json")

    var typeNode = addType(packager, "./types/custom_inherit1/node.json");
    addForm(packager, typeNode, "./types/custom_inherit1/forms/master.json")

    var typeNode = addType(packager, "./types/custom_inherit1-feature/node.json");
    addForm(packager, typeNode, "./types/custom_inherit1-feature/forms/master.json")

    var typeNode = addType(packager, "./types/custom_objectarray/node.json");
    addForm(packager, typeNode, "./types/custom_objectarray/forms/master.json")

    var typeNode = addType(packager, "./types/custom_reference1/node.json");

    var typeNode = addType(packager, "./types/custom_reference1a/node.json");

    var typeNode = addType(packager, "./types/custom_reference2/node.json");

    var typeNode = addType(packager, "./types/custom_reference3/node.json");

    var typeNode = addType(packager, "./types/custom_tabbed-view/node.json");
    addForm(packager, typeNode, "./types/custom_tabbed-view/forms/master.json")

    var typeNode = addType(packager, "./types/custom_type1/node.json");
    addForm(packager, typeNode, "./types/custom_type1/forms/master.json")

    var typeNode = addType(packager, "./types/custom_type2/node.json");
    addForm(packager, typeNode, "./types/custom_type2/forms/master.json")

    var typeNode = addType(packager, "./types/custom_wizard-view/node.json");
    addForm(packager, typeNode, "./types/custom_wizard-view/forms/master.json")

    // package up the archive
    packager.package(function(err, info) {
        if (err) {
            return console.error(err);
        }
        console.log("All done - wrote file: " + info.filename);
    });

});

/**
 *  Adds a specific content type (loaded from disk) to the packager.
 */
function addType (packager, filePath)
{
    var json = JSON.parse("" + fs.readFileSync(filePath));
    json._key = json._qname;
    return packager.addNode(json);
};

/**
 *  Adds a form to a specific content type (loaded from disk) to the packager.
 */
 function addForm(packager, typeNode, filePath)
 {
     var json = JSON.parse("" + fs.readFileSync(filePath));
     json._key = typeNode.json._qname + "-form";
     
     var formNode = packager.addNode(json);

     packager.addAssociation(typeNode, formNode, {
        "_type": "a:has_form",
        "form-key": path.basename(filePath, ".json")
    });
 };
 