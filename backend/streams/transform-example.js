import fs from "fs";
import { Transform } from "stream";

export function registerTransformRoute(app) {
	// TRANSFORM: uppercase each chunk as it flows through the stream pipeline.
	app.get("/api/transform", (req, res) => {
		const upper = new Transform({
			transform(chunk, encoding, callback) {
				try {
					const upperCased = chunk.toString().toUpperCase();
					this.push(upperCased);
					callback();
				} catch (err) {
					callback(err);
				}
			}
		});

		fs.createReadStream("./data/bigfile.txt")
			.pipe(upper)
			.pipe(res);
	});
}

