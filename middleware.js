const sleep = (ms) => new Promise((f) => setTimeout(f, ms));

export default async function middleware(request) {
	if (request.url.endsWith('.mjs')) {
		await sleep(1000);

		const response = new Response();
		response.headers.set('x-middleware-next', '1');
		return response;
	}

	const response = new Response();
	response.headers.set(
		'link',
		`<./a.mjs>; rel="modulepreload"; nopush, <./b.mjs>; rel="modulepreload"; nopush, <./c.mjs>; rel="modulepreload"; nopush`
	);
	response.headers.set('x-middleware-next', '1');
	return response;
}
