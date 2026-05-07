import { useState, useEffect } from "react";
import StreamExampleCard from "./StreamExampleCard";

export default function CounterUseEffectHookUI() {
    const [output, setOutput] = useState("");
    const [count, setCount] = useState(0);

    // useEffect is a react 'hook'
    // Has dependency on count (see below --> '..., [count];') Runs every time `count` changes.
    // Used here to transfer the count to a more meaningful string
    // Hooks must be called at the top level of the component (not inside funcs, loops, handlers, conditionals, callbacks)
    useEffect(() => {
        setOutput(`The Current count was incremented to a value of: ${count}`);
    }, [count]);

    const run = () => {
        // Reset count when "Run Example" is clicked
        setCount(0);
    };

    return (
        <StreamExampleCard title="useEffect Hook Example" onRun={run} output={output}>
            {/* onClick={XXX}, needs a function passed, hence the syntax 'onClick{() => setCount(...'}) */}
            <button onClick={() => setCount(prev => prev + 1)}>
                Count Increment
            </button>
        </StreamExampleCard>
    );
}
