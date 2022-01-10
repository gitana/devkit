import { connect } from '$lib/api/cloudcms';

// POST /api/books
export const post = async (request) => {
	let query = request.body || {};
	query._type = "store:book";

	const pagination = Object.fromEntries(request.query);

	const cloudcms = await connect(fetch);
	const branch = await cloudcms.getCurrentBranch(request);

    let books = (await branch.queryNodes(query, pagination)).rows;
	for (let book of books)
	{
		book.defaultAttachmentUrl = cloudcms.attachmentUrl(book);
	}

	return {
		body: {
			books
		}
	};
};
