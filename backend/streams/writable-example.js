import fs from "fs";

export function registerWritableRoute(app) {
	// WRITABLE: write demo content to a server-side file.
	app.get("/api/writable", (req, res) => {
		const writable = fs.createWriteStream("./data/output.txt");
		writable.write("Hello from writable stream!\n");
		writable.end();
		res.json({ message: "Wrote to output.txt" });
	});
}

