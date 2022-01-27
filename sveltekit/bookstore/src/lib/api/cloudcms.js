import * as cloudcms from 'cloudcms';
import { UtilitySession, FetchDriver } from 'cloudcms';
import * as gitanaJson from '../../../gitana.json';

class SvelteSession extends UtilitySession {
    constructor(config, driver, storage)
    {
        super(config, driver, storage);
        this._savedAttachments = {};
        this._branches = {};
    }

    attachmentUrl(node, attachmentId) {
        if (!attachmentId) {
            attachmentId = "default";
        }
    
        const ext = node._system.attachments[attachmentId] ? node._system.attachments[attachmentId].ext : "";
        return `/api/attachment/${node._doc}/${attachmentId}.${ext}`;
    }


    async getCurrentBranch(context)
    {
        let repositoryId = null;
        let branchId = null;

        let previewMode = true;

        if (previewMode)
        {
            if (context.locals.repository)
            {
                repositoryId = context.locals.repository;
            }
            if (context.locals.branch)
            {
                branchId = context.locals.branch;
            }
        }

        if (!repositoryId)
        {
            repositoryId = (await this.repository())._doc;
        }

        if (!branchId)
        {
            branchId = "master";
        }

        if(!this._branches[`${repositoryId}/${branchId}`])
        {
            let branch = await this.readBranch(repositoryId, branchId);

            // Wraps the branch in the Branch class, which binds all session functions whose first paramaters are (repository, branch), i.e. queryNodes
            branch = this.wrapBranch(repositoryId, branch);
            // bind download attachment to branch

            this._branches[`${repositoryId}/${branchId}`] = branch;
        }

        let branch = this._branches[`${repositoryId}/${branchId}`];
        branch.previewMode = false; // set me
        return branch;
    }
}

let session = null;

export async function connect(fetch) {
    if (!session)
    {
        cloudcms.driver(FetchDriver);
        cloudcms.session(SvelteSession);
        session = await cloudcms.connect({...gitanaJson, fetch});      
        session.defaults.qs.metadata = true;  
    }

    session.driver.fetch = fetch;
    return session;
}
