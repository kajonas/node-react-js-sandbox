import fs from "fs";

export function registerReadableRoute(app) {
	// READABLE: stream text file contents directly to the HTTP response.
	app.get("/api/readable", (req, res) => {
		const stream = fs.createReadStream("./data/bigfile.txt", { encoding: "utf8" });
		stream.pipe(res);
	});
}

