import fs from "fs";

export function registerPipeRoute(app) {
	// PIPE: copy one file to another by wiring readable to writable.
	app.get("/api/pipe", (req, res) => {
		fs.createReadStream("./data/bigfile.txt")
			.pipe(fs.createWriteStream("./data/piped-output.txt"));

		res.json({ message: "Piped bigfile.txt → piped-output.txt" });
	});
}

