const sleep = (ms) => new Promise((f) => setTimeout(f, ms));

export default async function middleware(request) {
	console.log(request);
	if (request.url.endsWith('.js')) {
		await sleep(1000);

		const response = new Response();
		response.headers.set('x-middleware-next', '1');
		return response;
	}
}
