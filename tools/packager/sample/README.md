# Sample Importer

Cloud CMS provides a command line tool that you can use to bulk import data into your content repository branches.  This allows
you to migrate existing data into Cloud CMS within a single transaction -- everything goes in or nothing goes in on top of a
single changeset.

This process is intended to support one-time "bulk load" scenarios as well as "incremental load" scenarios.

## Pre-requisites

To run any imports, you will first need to install the Cloud CMS command line tool.  

Installation instructions are provided here:
https://www.cloudcms.com/commandline.html

Once you have the tool installed, you will need to open a command prompt in the directory where this README file is.

Then do:

    cloudcms init
    
To connect to your Cloud CMS account.

Once you've connected, you should create a Project and an Application for the project within your tenant.  You can then do:

    cloudcms connect
    
To connect to your Cloud CMS project and application.  A `gitana.json` file will then be written down to disk.

## Importing

At a high level, the procedure for importing looks like this:

1.  Package your data into an archive (a ZIP file)
2.  Upload the archive to your Cloud CMS vault
3.  Import the archive into your repository branch

### Package your content

The first step is to package your content into an archive.  An archive is a ZIP file which is assembled on disk -- one that
adheres to the Cloud CMS archive format.  

Cloud CMS archives are portable between Cloud CMS installations and are usually produced by exporting from a Cloud CMS installation.  For example, you could export a Project from a Cloud CMS installation and the export would consist of an archive ZIP file.  The archive can then be copied to another Cloud CMS installation and imported.

The command line tool we use here does the same thing except it assembles the ZIP locally.

Before packaging an archive, you need to decide on the following attributes for the archive:

- Archive Group
- Archive ID
- Archive Version

These three things serve to identify your archive.  

The `Archive Group` is effectively a namespace for your archive.  You may have many archives in the same namespace.  You can use this in any way you choose.  For example, you might set it to `org.mycompany`.

The `Archive ID` is the primary identifier for your archive.  It might be the name of the content set you're working on.  For example, you might set it to "MyContent".

The `Archive Version` specifies the version of your archive.  You might use a versioning system like `1.0.0` or you might use a date system such as `02-05-2018`.  It's entirely up to you.

At the end of the day, the archive will retain this information so that you can reference it and distinguish between different archives that you may have created.  If you download the archive, it will have a name that derives from these, such as:

    org.mycompany-MyContent-02-05-2018.zip
    
To package an archive, you can run this command:

    cloudcms package <groupId> <artifactId> <versionId>
    
For example, you could do:

    cloudcms package org.mycompany MyContent 02-05-2018
    
The packaging process will look for a `package.js` file in your local directory.  It will then execute this file.  Within this file, you have access to the `packager` object which lets you add things to the package.

Once things finish, the packaged archive will be placed in the `archives` folder.  For example, you may see:

    archives/org.mycompany-MyContent-02-05-2018.zip
    
For more information on how to build your own packagers, see below.
    
### Upload your package

The next step is to upload the package to your Cloud CMS vault.  This is a pretty simple step.  All you need to do is:

    cloudcms upload org.mycompany MyContent 02-05-2018
    
The tool will upload the archive and let you know once it's ready to be deployed.

### Import your package

The final step is to import the package to your Cloud CMS repository branch.  This is also pretty simple.  You just run:

    cloudcms import org.mycompany MyContent 02-05-2018
    
The tool will tell the Cloud CMS server to import the vault to your current branch.  


## Building your own Packager

The `package` phase of the command line tool is the extension point where developers can hook in custom code to work with their
existing data and package it up.  There are two options here.

1.  Place files onto disk and let the packager scoop them up.
2.  Write a custom package.js file.

### Option 1: Files on disk

For simple cases, you can put files on disk and let the packager find them on its own.  This works as long as you follow a convention like this:

    ./setup/data/<directoryName>/<optionalPath>/<nodeName>/node.json
    
Every `node.json` file will be discovered and added to the package.

You can also include attachments by following a convention like this:

    ./setup/data/<directoryName>/<optionalPath>/<nodeName>/attachments/default.jpg
    
This will add an attachment named `default` to the node.  It will be loaded from disk and included in the package.

The "files on disk" option is simply an option.  If you don't have a `setup` directory, this will be skipped.

### Option 2: Custom package.js

If you include a custom package.js, it will be executed.  The package.js file should expose a function that looks like this:

    module.exports = function(packager, callback)
    {
        // TODO: put custom objects into the packager
        
        // all done
        callback();        
    };

#### Packager

The `packager` variable has a variety of interesting methods to help you populate the package.  These include:

##### packager.addDirectory(directoryPath)

This provides a manual way to invoke the auto-loading from option #1.  If you want to use that convention, this method lets you
manually grab at directories on disk.

Example -

    packager.addDirectory("setup/data/core");


##### packager.addNode(object)

Adds an object to the package.  The object is just a bit of JSON that you intend to become a node.

Example -

    packager.addNode({
        "title": "Hello World"
    });

Note that nodes support the following special fields:

* `_alias` - an internal alias for the node that you can use to reference it within other nodes
* `_key` - a field to serve as an alternate primary key for the object (allowing for overwrites on import)
    
    
##### packager.addAssociation(source, target, json)

Associates two nodes together.

Example -

    packager.addNode({
        "title": "The Parent Node",
        "_alias": "n1"
    });
    packager.addNode({
        "title": "The Child node",
        "_alias": "n2"
    });
    packager.addAssociation("n1", "n2", {
        "_type": "a:child"
    });
   
##### packager.addAttachment(id, attachmentId, source)

Adds an attachment to a node.  The source can either be a `string` (indicating the path to a file on disk) or it can be
a `stream`.

Example -

    packager.addAttachment("n1", "default", "/tmp/files/n1/hello.jpg");
       
Example -

    var stream = fs.createReadStream("/tmp/files/n1/hello.jpg");
    packager.addAttachment("n1", "default", stream);

#### Relator Properties

If your content features relator properties, you can use a special `__related_node__` field to indicate that a relator structure
should be filled out once the package is compiled.  Upon import to Cloud CMS, the relator associations will be put in place
for you.

Example -

    packager.addNode({
        "title": "The Related Node",
        "_alias": "related1"
    });
    packager.addNode({
        "title": "The Relating node",
        "points-to": {
            "__related_node__": "related1"
        }
    });

#### Tip and Tricks

The `_key` property can be used to provide a unique key for your content items upon import.  This key will be compared with
existing content items.  If collisions are found, the existing content items will be overwritten.  This allows you to run your
import multiple times successively.

The `_alias` property allows you to define a unique tag that you can use to refer to your imported element from within other
elements.  This is very helpful in terms of relational modeling.

A single ZIP archive of your package will be imported transactionally.  That is to say, all of your content will import
in one fell swoop (or none of it will).

If you have more than 50,000 items in your package, the package may split across multiple archievs.  You will see a suffix
added to your archive files, such as:

    archives/org.mycompany-MyContent-02-05-2018-1.zip
    archives/org.mycompany-MyContent-02-05-2018-2.zip
    archives/org.mycompany-MyContent-02-05-2018-3.zip
    
This has no impact on the importer mechanics.  Uploading will upload multiple archives and importing will import multiple.  The archives will still be imported within a single, transactional commit.

