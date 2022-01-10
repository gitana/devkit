import { connect } from '$lib/api/cloudcms';

// POST /api/tags
export const post = async (request) => {
	let query = request.body || {};
	query._type = "n:tag";

	const pagination = Object.fromEntries(request.query);

	const session = await connect(fetch);
	const branch = await session.getCurrentBranch(request);

    let tags = (await branch.queryNodes(query, pagination)).rows;


	return {
		body: {
			tags
		}
	};
};
