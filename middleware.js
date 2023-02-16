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
		['a', 'b', 'c']
			.map(
				(x) =>
					`<./${x}.mjs>; rel="preload"; as="script"; crossorigin="anonymous"; nopush`
			)
			.join(', ')
	);
	response.headers.set('x-middleware-next', '1');
	return response;
}
