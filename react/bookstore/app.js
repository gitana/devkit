const express = require('express');
const app = express();
const path = require('path');
const _ = require('underscore');
const cloudcms = require("cloudcms");
const fs = require('fs');
const os = require('os');

process.env.CLOUDCMS_BRANCH = process.env.CLOUDCMS_BRANCH || 'master';
const tmpDir = path.join(os.tmpdir(), "cloudcms-bookstore-cache");

init().then(() => {
    // start web server
    app.set('port', process.env.PORT || 3000);

    var server = app.listen(app.get('port'), function () {
        console.log("");
        console.log("-------------------------------");
        console.log("React Bookstore sample running...");
        console.log("");
        console.log("   To view sample content, go to http://localhost:" + server.address().port + "/");
        console.log("");
    });
});

async function init() {
    const cloudcmsSession = await cloudcms.connect();
    cloudcmsSession.defaults.qs.metadata = true;
    const application = await cloudcmsSession.readApplication(cloudcmsSession.config.application);
    const project = await cloudcmsSession.readProject(application.projectId);
    const stack = await cloudcmsSession.readStack(project.stackId);
    const dataStores = await cloudcmsSession.listDataStores(stack);
    const dataStoresById = _.indexBy(dataStores.rows, '_doc');
    const repository = dataStoresById.content;
    repository._doc = repository.datastoreId;
    const branchList = await cloudcmsSession.listBranches(repository);
    const branchesById = _.indexBy(branchList.rows, '_doc');
    const branchesByTitle = _.indexBy(branchList.rows, 'title');
    const branch = process.env.CLOUDCMS_BRANCH === 'master' ? branchesByTitle['master'] : branchesById[process.env.CLOUDCMS_BRANCH];

    console.log(`-------------------------------\nConnected to Cloud CMS project "${project.title}" branch "${branch.title}"}`);

    app.use(express.static(path.join(__dirname, 'public')));

    app.get("/api/books", async (req, res) => {
        let query = {
            _type: "store:book"
        };

        if (req.query.tag) {
            query.tags = req.query.tag;
        }

        let result = await cloudcmsSession.queryNodes(repository, branch, query, { metadata: true, full: true, limit: 100 });
        return res.status(200).json(updateProperties(result).rows);
    });

    app.get("/api/books/:id", async (req, res) => {
        let result = await cloudcmsSession.readNode(repository, branch, req.params.id);
        return res.status(200).json(updateProperties(result));
    });

    app.get("/api/authors", async (req, res) => {
        let query = {
            _type: "store:author"
        };

        let result = await cloudcmsSession.queryNodes(repository, branch, query, { metadata: true, full: true, paths: true, limit: 100 });
        return res.status(200).json(updateProperties(result).rows);
    });

    app.get("/api/search", async (req, res) => {
        let query = {
            search: req.query.text,
            query: {
                _type: "store:book"
            }
        };

        let result = await cloudcmsSession.findNodes(repository, branch, query, { metadata: true, full: true, limit: 100 });
        return res.status(200).json(updateProperties(result));
    });

    app.get("/api/tags", async (req, res) => {
        let query = {
            _type: "n:tag",
            _fields: {
                tag: 1,
                title: 1
            }
        };

        let result = await cloudcmsSession.queryNodes(repository, branch, query, {
            sort: {
                tag: 1
            }, limit: 100
        });

        let tags = _.indexBy(result.rows, '_doc');
        return res.status(200).json(tags);
    });

    app.get("/static/*", async (req, res) => {
        return await handleStatic(req, res, cloudcmsSession, cloudcmsSession.acquireId(repository), cloudcmsSession.acquireId(branch));
    });


    app.get('*', function (req, res) {
        // res.redirect("index.html")
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });
}

function updateProperties(result) {
    if (result.rows !== undefined && result.rows.length) {
        result.rows.map((row) => {
            row.author && (row.authorTitle = row.author.title);
            row.imageUrl = `/static/${row._doc}/default.${row._system.attachments.default.ext}`
            if (row.recommendations) {
                row.recommendations.map((book) => {
                    book._doc = book.id;
                    book.authorTitle = "";
                    book.imageUrl = `/static/${book._doc || book.id}/default.jpg`;
                });
            }
        });
    } else {
        result.author && (result.authorTitle = result.author.title);
        result.imageUrl = `/static/${result._doc}/default.${result._system.attachments.default.ext}`
        if (result.recommendations) {
            result.recommendations.map((book) => {
                book._doc = book.id;
                book.authorTitle = "";
                book.imageUrl = `/static/${book._doc || book.id}/default.jpg`;
            });
        }
    }

    return result;
}

async function handleStatic(req, res, cloudcmsSession, repositoryId, branchId) {
    //  get node info from request
    let parts = req.path.split('/');
    let nodeId = parts[2];
    let attachmentId = path.parse(parts[3]).name;
    let ext = path.parse(parts[3]).ext.slice(1);

    if (process.env.NODE_ENV !== 'production') {
        // don't use cache unless in production mode
        let attachment = await cloudcmsSession.downloadAttachment(repositoryId, branchId, nodeId, attachmentId);
        return attachment.pipe(res);
    }

    let cacheFolderPath = path.join(tmpDir, repositoryId, branchId, nodeId);
    let cacheFilePath = path.join(tmpDir, repositoryId, branchId, nodeId, `${attachmentId}.${ext}`);

    if (fs.existsSync(cacheFilePath)) {
        // read from cache
        return res.sendFile(cacheFilePath);
    }

    // write to cache
    let attachment = await cloudcmsSession.downloadAttachment(repositoryId, branchId, nodeId, attachmentId);
    if (!fs.existsSync(cacheFolderPath)) {
        fs.mkdirSync(cacheFolderPath, { recursive: true });
    }

    // read from cache
    let ws = fs.createWriteStream(cacheFilePath);
    attachment.pipe(ws);
    ws.on('close', function () {
        return res.sendFile(cacheFilePath);
    });
}

// export const ViteDevServer = app;