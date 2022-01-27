import { connect } from '$lib/api/cloudcms';

// POST /api/tags
export const post = async (event) => {
	const request = event.request;
	const params = event.url.searchParams;

	let query = (await request.json()) || {};
	query._type = "n:tag";

	const pagination = Object.fromEntries(params);

	const session = await connect(fetch);
	const branch = await session.getCurrentBranch(event);

    let tags = (await branch.queryNodes(query, pagination)).rows;


	return {
		body: {
			tags
		}
	};
};
