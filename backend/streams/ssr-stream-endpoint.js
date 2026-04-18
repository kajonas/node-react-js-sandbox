export function registerSsrStreamRoute(app) {
	// SSR STREAM: progressively write HTML fragments to the response.
	app.get("/api/ssr-stream", (req, res) => {
		res.setHeader("Content-Type", "text/html");

		res.write("<h1>Streaming SSR Example</h1>");
		setTimeout(() => res.write("<p>Chunk 1</p>"), 500);
		setTimeout(() => res.write("<p>Chunk 2</p>"), 2000);
		setTimeout(() => res.end("<p>Done!</p>"), 4000);
	});
}

