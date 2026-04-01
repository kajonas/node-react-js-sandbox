import { useState } from "react";
import StreamExampleCard from "./StreamExampleCard";

export default function FetchStreamUI() {
    const [output, setOutput] = useState("");

    const run = async () => {
        const res = await fetch("http://localhost:3001/api/fetch-stream");
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let result = "";

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            result += decoder.decode(value);

            // This line causes your React component to re-render with the latest streamed text.
            // This is why your UI updates incrementally as the server sends data (your outputting in a loop)
            setOutput(result);
        }
    };

    return (
        <StreamExampleCard
            title="Fetch Streaming Example"
            onRun={run}
            output={output}
        />
    );
}