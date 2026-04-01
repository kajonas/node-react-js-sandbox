import { useState } from "react";
import { callEndpoint } from "../api/api";
import StreamExampleCard from "./StreamExampleCard";

export default function ReadableStreamUI() {
    const [output, setOutput] = useState("");

    const run = async () => {
        const text = await callEndpoint("/api/readable");
        setOutput(text);
    };

    return (
        <StreamExampleCard
            title="Readable Stream Example"
            onRun={run}
            output={output}
        />
    );
}