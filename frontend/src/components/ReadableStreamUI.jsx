import { useState } from "react";
import { callEndpoint } from "../api/api";
import StreamExampleCard from "./StreamExampleCard";

/*
1) State
The purpose of component state is to store values that can change over time (have state)
AND, most importantly, automatically re-render the UI when they change.
** Only the component (and it's children) whose state changed is re‑rendered, not the entire app.

2) useState Hook
useState is a React hook that allows you to add state to functional components.
It returns an array with two elements: the current state value and a function to update it.

3) In code below, the state from useState("") is scoped to that component instance.
It’s available only inside this ReadableStreamUI function (and closures created there, like run).
  3.a) Each rendered instance of ReadableStreamUI gets its own separate output state.

4) const declares variables that should not be reassigned (like output, setOutput, and run),
which helps keep the code predictable.
*/

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