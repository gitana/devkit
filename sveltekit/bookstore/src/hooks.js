import cookie from 'cookie';
import { connect } from '$lib/api/cloudcms';

export const handle = async ({ request, resolve }) => {
	const cookies = cookie.parse(request.headers.cookie || '');
	
	const cloudcmsSession = await connect(fetch);
	const query = Object.fromEntries(request.query);

	if (query.repository)
	{
		request.locals.repository = query.repository;
	}
	else if (cookies.repository)
	{
		request.locals.repository = cookies.repository;
	}

	if (query.branch)
	{
		request.locals.branch = query.branch;
	}
	else if (cookies.branch)
	{
		request.locals.branch = cookies.branch;
	}

	let responseCookies = [];
	if (request.locals.branch)
	{
		responseCookies.push(cookie.serialize('branch', request.locals.branch, {
			path: '/',
			sameSite: "strict"
		}));
	}

	if (request.locals.repository)
	{
		responseCookies.push(cookie.serialize('branch', request.locals.branch, {
			path: '/',
			sameSite: "strict"
		}));
	}

	// ensures branch info will be avaible in page fetches
	request.headers.cookie = responseCookies.join(',');

	const response = await resolve(request);

	// if (response.headers['content-type'] === 'text/html')
	// {
	// 	cloudcmsSession.trackPage(request.locals.repository, request.locals.branch, { path: request.path, html: response.body });
	// }

	
	response.headers['set-cookie'] = responseCookies;
	return response;
};

export async function getSession(request) {
	let session = {};
	session.branch = request.locals.branch;
	session.repository = request.locals.repository;

	return session;
}