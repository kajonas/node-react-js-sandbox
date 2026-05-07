import { useState } from "react";
import { callEndpoint } from "../api/api";
import StreamExampleCard from "./StreamExampleCard";

/*
Backpressure
=============
It means the producer is sending data faster than the consumer can handle,
so pressure builds in the stream pipeline and flow has to be slowed/managed.
 */

export default function WritableStreamUI() {
    const [output, setOutput] = useState("");

    const run = async () => {
        const text = await callEndpoint("/api/writable");
        setOutput(text);
    };

    return (
        <StreamExampleCard
            title="Writable Stream Example"
            onRun={run}
            output={output}
        />
    );
}