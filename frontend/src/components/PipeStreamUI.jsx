
import { useState } from "react";
import { callEndpoint } from "../api/api";
import StreamExampleCard from "./StreamExampleCard";

export default function PipeStreamUI() {
    const [output, setOutput] = useState("");

    const run = async () => {
        const text = await callEndpoint("/api/pipe");
        setOutput(text);
    };

    return (
        <StreamExampleCard
            title="Pipe Stream Example"
            onRun={run}
            output={output}
        />
    );
}