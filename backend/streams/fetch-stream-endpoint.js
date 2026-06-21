export function registerFetchStreamRoute(app) {
	// FETCH STREAM: send chunks over time so UI can render incremental updates.
	app.get("/api/fetch-stream", async (req, res) => {
		res.setHeader("Content-Type", "text/plain");

		// setInterval is a timer-driven iteration, not a for/while loop in the function body.
		// Iterates every 1000 ms until clearInterval(interval) is called.
		let i = 0;
		const interval = setInterval(() => {
			res.write(`Chunk ${i}\n`);
			i++;
			if (i === 5) {
				clearInterval(interval);
				res.end("Done streaming!");
			}
		}, 1000);
	});
}

