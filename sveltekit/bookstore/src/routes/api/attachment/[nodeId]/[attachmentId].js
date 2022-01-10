import { connect } from '$lib/api/cloudcms';

// GET /api/attachment/[nodeId]/[attachmentId]
export const get = async (request) => {
    let { nodeId, attachmentId } = request.params;

	const session = await connect(fetch);
	const branch = await session.getCurrentBranch(request);

	// Remove extension if present
	if (attachmentId.indexOf('.') >= 0) {
		attachmentId = attachmentId.slice(0, attachmentId.indexOf('.'));
	}

    let node = await branch.readNode(nodeId);
	let attachment = await session.downloadAttachment(branch.repositoryId, branch, node, attachmentId);

	function streamToBuffer(stream)
	{
		return new Promise((resolve, reject) => {
			const chunks = [];
			stream.once('error', (err) => reject(err));
			stream.on('data', (chunk) => chunks.push(chunk));
			stream.once('end', () => resolve(Buffer.concat(chunks)));
		});
	}

	let buf = await streamToBuffer(attachment);
	const contentType = node._system.attachments[attachmentId].contentType;


	return {
		body: new Uint8Array(buf),
		headers: {
			'content-type': contentType
		}
	};
};
