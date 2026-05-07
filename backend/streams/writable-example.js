import fs from "fs";

/*
pipe() is for connecting a readable source into a writable destination.
In writable-example.js, writable is already the destination (WriteStream),
and your data is just a literal string. So you use: writable.write(...) to push bytes directly
writable.end() to finish
 */
export function registerWritableRoute(app) {
	// WRITABLE: write demo content to a server-side file.
	app.get("/api/writable", (req, res) => {
		const writable = fs.createWriteStream("./data/output.txt");
		writable.write("Hello from writable stream!\n");
		writable.end();
		res.json({ message: "Wrote to output.txt" });
	});
}

