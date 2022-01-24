import cookie from 'cookie';
import { connect } from '$lib/api/cloudcms';

export const handle = async ({ event, resolve }) => {
	let request = event.request;

	const cookies = cookie.parse(request.headers.get('cookie') || '');
	
	const cloudcmsSession = await connect(fetch);
	const query = Object.fromEntries(event.url.searchParams);

	if (query.repository)
	{
		event.locals.repository = query.repository;
	}
	else if (cookies.repository)
	{
		event.locals.repository = cookies.repository;
	}

	if (query.branch)
	{
		event.locals.branch = query.branch;
	}
	else if (cookies.branch)
	{
		event.locals.branch = cookies.branch;
	}

	let responseCookies = [];
	if (event.locals.branch)
	{
		responseCookies.push(cookie.serialize('branch', event.locals.branch, {
			path: '/',
			sameSite: "strict"
		}));
	}

	if (event.locals.repository)
	{
		responseCookies.push(cookie.serialize('repository', event.locals.repository, {
			path: '/',
			sameSite: "strict"
		}));
	}

	// ensures branch info will be avaible in page fetches
	request.headers.set('cookie', responseCookies.join(','));

	const response = await resolve(event);

	// if (response.headers['content-type'] === 'text/html')
	// {
	// 	cloudcmsSession.trackPage(request.locals.repository, request.locals.branch, { path: request.path, html: response.body });
	// }

	
	response.headers.set('set-cookie', responseCookies); // = new Headers(headers);
	return response;
};

export async function getSession(event) {
	let session = {};
	session.branch = event.locals.branch;
	session.repository = event.locals.repository;

	return session;
}