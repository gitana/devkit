import { connect } from '$lib/api/cloudcms';

// GET /api/book/[slug]
export const get = async (request) => {
    const { slug } = request.params;
    const query = { 
        slug,
        _type: 'store:book'
    };

	const session = await connect(fetch);
	const branch = await session.getCurrentBranch(request);

    let book = await branch.queryOneNode(query);
	book.defaultAttachmentUrl = session.attachmentUrl(book)
	book.pdfUrl = session.attachmentUrl(book, 'book_pdf');

	if (book.recommendations)
	{
		book.recommendations = await Promise.all(book.recommendations.map(async (rec) => {
			let newRec = await branch.readNode(rec.id);
			newRec.defaultAttachmentUrl = session.attachmentUrl(newRec);
			return newRec;
		}));
	}


	return {
		body: {
			...book
		}
	};
};
