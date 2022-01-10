import { connect } from '$lib/api/cloudcms';

// POST /api/authors
export const post = async (request) => {
	let query = request.body || {};
	query._type = "store:author";

	const pagination = Object.fromEntries(request.query);

	const session = await connect(fetch);
	const branch = await session.getCurrentBranch(request);

    let authors = (await branch.queryNodes(query, pagination)).rows;
	for (let author of authors)
	{
		author.defaultAttachmentUrl = session.attachmentUrl(author);
	}

	return {
		body: {
			authors
		}
	};
};
