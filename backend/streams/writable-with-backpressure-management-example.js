import fs from "fs";
import { once } from "events";

/*
If writable.write(...) returns false, it means the internal buffer is full.
Without backpressure handling, your loop keeps writing anyway, so data gets queued in memory.
Result: memory usage can grow quickly, performance drops, and in worst cases the process can stall or crash (OOM).
You also lose proper flow control between producer and destination speed.

So this code:
	if (!canContinue) await once(writable, "drain") is what prevents uncontrolled buffering.
 */
export function registerWritableWithBackpressureManagementRoute(app) {
	// WRITABLE + BACKPRESSURE: pause writes when internal buffer is full and wait for drain.
	app.get("/api/writable-with-backpressure-management-example", async (req, res) => {
		const writable = fs.createWriteStream("./data/output-with-backpressure.txt");

		try {
			for (let i = 0; i < 2000; i++) {
				const canContinue = writable.write(`Chunk ${i} from writable stream with backpressure handling.\n`);

				if (!canContinue) {
					await once(writable, "drain");
				}
			}

			writable.end();
			await once(writable, "finish");

			res.json({
				message: "Wrote to output-with-backpressure.txt with backpressure management"
			});
		} catch (err) {
			writable.destroy();
			res.status(500).json({ message: err.message });
		}
	});
}

