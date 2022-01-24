import { connect } from '$lib/api/cloudcms';

// POST /api/authors
export const post = async (event) => {
	const request = event.request;
	const params = event.url.searchParams;
	
	let query = (await request.json()) || {};
	query._type = "store:author";
	
	const pagination = Object.fromEntries(params);

	const session = await connect(fetch);
	const branch = await session.getCurrentBranch(event);

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
