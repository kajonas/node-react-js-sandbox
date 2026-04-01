import { useState } from "react";
import { callEndpoint } from "../api/api";
import StreamExampleCard from "./StreamExampleCard";

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