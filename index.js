import { createReadStream, existsSync } from 'node:fs';
import { createServer } from 'node:http';

const sleep = (ms) => new Promise((f) => setTimeout(f, ms));

createServer(async (req, res) => {
	if (req.url.endsWith('.js')) {
		await sleep(1000);
		res.writeHead(200, {
			'content-type': 'application/javascript'
		});

		createReadStream(`public${req.url}`).pipe(res);
	} else if (req.url === '/') {
		res.writeHead(200, {
			'content-type': 'text/html'
		});

		createReadStream('public/index.html').pipe(res);
	} else {
		res.writeHead(404);
		res.end('not found');
	}
}).listen(3000, () => {
	console.log('listening on port 3000');
});
