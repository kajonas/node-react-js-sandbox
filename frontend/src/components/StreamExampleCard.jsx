import { useState } from "react";

export default function StreamExampleCard({ title, onRun, output, children }) {
    const [hidden, setHidden] = useState(true);

    const handleRun = () => {
        setHidden(false);   // show output area
        onRun();            // then run the example
    };

    const handleClose = () => {
        setHidden(true);    // hide the output area
    };

    return (
        <div style={{ border: "1px solid #ccc", padding: 20, marginBottom: 20 }}>
            <h3>{title}</h3>

            <button onClick={handleRun}>Run Example</button>
            <button onClick={handleClose} style={{ marginLeft: 10 }}>
                Close
            </button>

            {/* regarding '{!hidden && (' code snip,
                Here, we're basically saying if !hidden == true, then render, else not.
                ** This is a React specific convention **
           */}
            {!hidden && (
                <div style={{ marginTop: 10 }}>
                    {children}
                </div>
            )}

            {/* Hide output when hidden === true */}
            {!hidden && output && (
                <pre style={{ marginTop: 10, background: "#eee", padding: 10 }}>
                    {output}
                </pre>
            )}
        </div>
    );
}