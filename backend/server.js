import cors from "cors";
import express from "express";
import { registerFetchStreamRoute } from "./streams/fetch-stream-endpoint.js";
import { registerPipeRoute } from "./streams/pipe-example.js";
import { registerReadableRoute } from "./streams/readable-example.js";
import { registerSsrStreamRoute } from "./streams/ssr-stream-endpoint.js";
import { registerTransformRoute } from "./streams/transform-example.js";
import { registerWritableRoute } from "./streams/writable-example.js";

// Avoids CORS (Cross Origins error), by allowing Cross Origins (from 1 port to another)
const app = express();
app.use(cors());
const PORT = 3001;

registerReadableRoute(app);
registerWritableRoute(app);
registerTransformRoute(app);
registerPipeRoute(app);
registerFetchStreamRoute(app);
registerSsrStreamRoute(app);

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

