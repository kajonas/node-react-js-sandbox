import { useState } from "react";
import StreamExampleCard from "./StreamExampleCard";

export default function SSRStreamUI() {
    const [output, setOutput] = useState("");

    const run = async () => {
        const res = await fetch("http://localhost:3001/api/ssr-stream");
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let result = "";

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            result += decoder.decode(value);
            setOutput(result);
        }
    };

    return (
        <StreamExampleCard
            title="SSR Streaming Example"
            onRun={run}
            output={output}
        />
    );
}
