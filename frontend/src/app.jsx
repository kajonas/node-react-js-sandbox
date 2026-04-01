import ReadableStreamUI from "./components/ReadableStreamUI";
import WritableStreamUI from "./components/WritableStreamUI";
import TransformStreamUI from "./components/TransformStreamUI";
import PipeStreamUI from "./components/PipeStreamUI";
import FetchStreamUI from "./components/FetchStreamUI";
import SSRStreamUI from "./components/SSRStreamUI";
import CounterUseStateHookUI from "./components/CounterUseStateHook";
import CounterUseEffectHookUI from "./components/CounterUseEffectHook";

export default function App() {
    return (
        <div style={{ padding: 40 }}>
            <h1>Node + React Stream Sandbox</h1>

            <ReadableStreamUI />
            <WritableStreamUI />
            <TransformStreamUI />
            <PipeStreamUI />
            <FetchStreamUI />
            <SSRStreamUI />

            <CounterUseStateHookUI />
            <CounterUseEffectHookUI />
        </div>
    );
}