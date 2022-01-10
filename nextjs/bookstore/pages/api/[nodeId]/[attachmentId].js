import { connect } from '../../../lib/cloudcms';

function streamToBuffer(stream)
{
    return new Promise((resolve, reject) => {
        const chunks = [];
        stream.once('error', (err) => reject(err));
        stream.on('data', (chunk) => chunks.push(chunk));
        stream.once('end', () => resolve(Buffer.concat(chunks)));
    });
}

export default async function handler (req, res)
{
    const session = await connect();

    let repository = req.query.repository || process.env.repositoryId || await session.repository();
    let branch = req.query.branch || process.env.branchId || "master";

    if (req.previewData)
    {
        if (req.previewData.repository)
        {
            repository = req.previewData.repository;
        }
        if (req.previewData.branch)
        {
            branch = req.previewData.branch;
        }
    }

    const nodeId = req.query.nodeId;
    const attachmentId = req.query.attachmentId;

    
    const result = await session.downloadAttachment(repository, branch, nodeId, attachmentId);

    const buffer = await streamToBuffer(result);
    res.status(200).send(buffer);
}