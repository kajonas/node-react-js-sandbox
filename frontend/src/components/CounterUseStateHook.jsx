import { useState } from "react";
import StreamExampleCard from "./StreamExampleCard";

export default function CounterUseStateHookUI() {
    // useState is a react 'hook', does 3 things:
    // 1. remember its value between renders
    // 2. re-render the component whenever it changes
    // 3. update the UI automatically
    const [count, setCount] = useState(0);

    const run = () => {
        // Reset count when "Run Example" is clicked
        setCount(0);
    };

    return (
        <StreamExampleCard
            title="useState Hook Example"
            onRun={run}
            output={count}   // output is just the count itself
        >
            <button onClick={() => setCount(prev => prev + 1)}>
                Count Increment
            </button>
        </StreamExampleCard>
    );
}