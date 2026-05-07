import fs from "fs";

/*
1) Stream
Creating a stream lets the server read data in chunks instead of loading everything into memory at once
(better for large data).
In this example, we read a big text file and stream its contents directly to the HTTP response.
The client will receive the file contents incrementally as they are read, which is more efficient for large files.

2) Pipe
stream.pipe(res) sends those chunks directly to the HTTP response as they’re read,
handling flow control automatically and finishing the response when done.
*/


export function registerReadableRoute(app) {
	// READABLE: stream text file contents directly to the HTTP response.
	app.get("/api/readable", (req, res) => {
		const stream = fs.createReadStream("./data/bigfile.txt", { encoding: "utf8" });
		stream.pipe(res);
	});
}

