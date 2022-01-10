import * as cloudcms from 'cloudcms';
import { UtilitySession } from 'cloudcms';
import * as fs from 'fs';
import mime from 'mime-types';

const CLOUDCMS_SAVE_PATH = `${process.cwd()}/.next/static/cloudcms`
const CLOUDCMS_OUT = `_next/static/cloudcms`

class NextSession extends UtilitySession {
    constructor(config, driver, storage)
    {
        super(config, driver, storage);
        this._savedAttachments = {};
        this._branches = {};
    }

    async readBranch(repository, branchId)
    {
        const repositoryId = this.acquireId(repository);

        if(!this._branches[`${repositoryId}/${branchId}`])
        {
            let branch = await super.readBranch(repositoryId, branchId);
            this._branches[`${repositoryId}/${branchId}`] = branch;
        }

        return this._branches[`${repositoryId}/${branchId}`];
    }

    async readNode(repository, branch, nodeId, path, callback) {
        let node = await super.readNode(repository, branch, nodeId, path, callback);
        await this.bindExtraProperties_row(repository, branch, node);
        return node;
    }

    async queryNodes(repository, branch, query, pagination, callback) {
        let response = await super.queryNodes(repository, branch, query, pagination, callback);
        await this.bindExtraProperties_response(repository, branch, response);
        return response;
    }

    async searchNodes(repository, branch, search, pagination, callback) {
        let response = await super.searchNodes(repository, branch, search, pagination, callback);
        await this.bindExtraProperties_response(repository, branch, response);
        return response;
    }

    async findNodes(repository, branch, config, pagination, callback) {
        let response = await super.findNodes(repository, branch, config, pagination, callback);
        await this.bindExtraProperties_response(repository, branch, response);
        return response;
    }

    async bindExtraProperties_row(repository, branch, row) {
        try {
            row.defaultAttachmentUrl = await this.createAttachmentLink(repository, branch, row._doc);
        } catch (e) {
            // swallow
        }
    }
    
    async bindExtraProperties_response(repository, branch, response) {
        if (response && response.rows) {
            // Bind extra properties for all rows in the response
            const tasks = response.rows.map(row => this.bindExtraProperties_row(repository, branch, row))
            await Promise.all(tasks);
        }
    }

    async createAttachmentLink(repository, branch, nodeId, attachmentId) {
        const repositoryId = this.acquireId(repository);
        const branchId = this.acquireId(branch);
        if (!attachmentId) {
            attachmentId = "default";
        }

        const tokens = `${repositoryId}/${branchId}/${nodeId}/${attachmentId}`;
    
        if (branch.previewMode)
        {
            return `/api/${nodeId}/${attachmentId}`;
        }
        if (!this._savedAttachments[tokens] || process.env.NODE_ENV === 'development') {
            const saveDir = `${CLOUDCMS_SAVE_PATH}/${repositoryId}/${branchId}/${nodeId}`;
            if (!fs.existsSync(saveDir)) {
                fs.mkdirSync(saveDir, { recursive: true });
            }
    
            const attachment = await this.downloadAttachment(repositoryId, branchId, nodeId, attachmentId);
            const ext = mime.extension(attachment.headers['content-type']);
    
            const savePath = `${tokens}.${ext}`;
            this._savedAttachments[tokens] = savePath;
            const ws = fs.createWriteStream(`${CLOUDCMS_SAVE_PATH}/${this._savedAttachments[tokens]}`);
            attachment.pipe(ws);
        }
    
        const outputPath = `/${CLOUDCMS_OUT}/${this._savedAttachments[tokens]}`;
        return outputPath;
    }

    async getCurrentBranch(context)
    {
        let repositoryId = null;
        let branchId = null;
        if (context && context.preview && context.previewData)
        {
            repositoryId = context.previewData.repository,
            branchId = context.previewData.branch
        }

        if (!repositoryId)
        {
            repositoryId = process.env.repositoryId;
        }
        if (!repositoryId)
        {
            repositoryId = (await this.repository())._doc;
        }

        if (!branchId)
        {
            branchId = process.env.branchId;
        }
        if (!branchId)
        {
            branchId = "master";
        }
        
        let branch = await this.readBranch(repositoryId, branchId);
        branch.previewMode = context ? context.preview : false;

        // Wraps the branch in the Branch class, which binds all session functions whose first paramaters are (repository, branch), i.e. queryNodes
        branch = this.wrapBranch(repositoryId, branch);
        branch.createAttachmentLink = this.createAttachmentLink.bind(this, repositoryId, branch);

        return branch;
    }
}


let session = null;
export async function connect() {
    if (!session) {
        cloudcms.session(NextSession);

        let gitanaJson = null;
        if (fs.existsSync(`${process.cwd()}/gitana.json`))
        {
            gitanaJson = fs.readFileSync(`${process.cwd()}/gitana.json`)
        }

        if (!gitanaJson)
        {
            gitanaJson = {
                "clientKey": process.env.CLOUDCMS_CLIENT_KEY,
                "clientSecret": process.env.CLOUDCMS_CLIENT_SECRET,
                "username": process.env.CLOUDCMS_USERNAME,
                "password": process.env.CLOUDCMS_PASSWORD,
                "baseURL": process.env.CLOUDCMS_BASE_URL,
                "application": process.env.CLOUDCMS_APPLICATION
            }
        }

        session = await cloudcms.connect(gitanaJson);
    }

    return session;
}

export async function getCurrentBranch(context) {
    const session = await connect();
    return await session.getCurrentBranch(context);
}
