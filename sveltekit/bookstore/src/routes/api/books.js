import { connect } from '$lib/api/cloudcms';

// POST /api/books
export const post = async (event) => {
	const request = event.request;
	const params = event.url.searchParams;

	let query = (await request.json()) || {};
	query._type = "store:book";

	const pagination = Object.fromEntries(params);

	const cloudcms = await connect(fetch);
	const branch = await cloudcms.getCurrentBranch(event);

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
