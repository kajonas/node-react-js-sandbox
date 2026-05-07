import { useState } from "react";
import { callEndpoint } from "../api/api";
import StreamExampleCard from "./StreamExampleCard";

export default function WritableStreamWithBackPressureManagmentUI() {
    const [output, setOutput] = useState("");

    // This UI only triggers the demo endpoint; backpressure handling is implemented in the backend write loop.
    const run = async () => {
        const text = await callEndpoint("/api/writable-with-backpressure-management-example");
        setOutput(text);
    };

    return (
        <StreamExampleCard
            title="Writable Stream With BackPressure Managment Example"
            onRun={run}
            output={output}
        />
    );
}

