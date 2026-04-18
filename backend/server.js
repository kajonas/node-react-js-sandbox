import cors from "cors";
import express from "express";
/** @type {typeof import('fs')} */
import fs from "fs";                    // fs is a module namespace object, provides all the file system capabilities
import path from "path";
import { Transform } from "stream";

// Avoids CORS (Cross Origins error), by allowing Cross Origins (from 1 port to another)
const app = express();
app.use(cors());
const PORT = 3001;

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

// --- READABLE STREAM EXAMPLE ---
app.get("/api/readable", (req, res) => {
    // returns a Readable stream instance, 'fs' is simply the factory that creates it
    const stream = fs.createReadStream("./data/bigfile.txt", { encoding: "utf8" });
    stream.pipe(res);
});

// --- WRITABLE STREAM EXAMPLE ---
app.get("/api/writable", (req, res) => {
    // returns a Writeable stream instance, 'fs' is simply the factory that creates it
    const writable = fs.createWriteStream("./data/output.txt");
    writable.write("Hello from writable stream!\n");
    writable.end();
    res.json({ message: "Wrote to output.txt" });
});

// --- TRANSFORM STREAM EXAMPLE ---
app.get("/api/transform", (req, res) => {
    const upper = new Transform({
        transform(chunk, encoding, callback) {
            try {
                // Process the data chunk
                const upperCased = chunk.toString().toUpperCase();

                // Push the transformed data to the next stream in the pipe
                this.push(upperCased);

                // Signal that we are ready for the next chunk
                callback();
            } catch (err) {
                // Pass errors to the callback to trigger the 'error' event
                callback(err);
            }
        }
    });

    fs.createReadStream("./data/bigfile.txt")
        .pipe(upper)
        .pipe(res);
});

// --- PIPE EXAMPLE ---
app.get("/api/pipe", (req, res) => {
    fs.createReadStream("./data/bigfile.txt")
        .pipe(fs.createWriteStream("./data/piped-output.txt"));

    res.json({ message: "Piped bigfile.txt → piped-output.txt" });
});

// --- FETCH STREAM ENDPOINT ---
// --- only streamed content comes from --> res.write(`Chunk ${i}\n`);
// --- res.write(...) just streams the text straight to the response (per iteration every 1000ms)
app.get("/api/fetch-stream", async (req, res) => {
    res.setHeader("Content-Type", "text/plain");

    // Dangerous loop here  (i.e. if (i==5) then clearInterval(interval).
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

// --- SSR STREAM ENDPOINT ---
app.get("/api/ssr-stream", (req, res) => {
    res.setHeader("Content-Type", "text/html");

    res.write("<h1>Streaming SSR Example</h1>");
    setTimeout(() => res.write("<p>Chunk 1</p>"), 500);
    setTimeout(() => res.write("<p>Chunk 2</p>"), 2000);
    setTimeout(() => res.end("<p>Done!</p>"), 4000);
});
