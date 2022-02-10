import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/theme/material-darker.css";
import SecondHeader from "./components/SecondHeader";
import Console from "./components/Console";

function App() {
    const [run, setRun] = useState({ runBtn: false, code: " " });
    const [code, setCode] = useState(" ");
    return (
        <div className="container">
            <Header />
            <SecondHeader setRun={setRun} run={run} setCode={setCode} />
            <div className="playground">
                <CodeMirror
                    options={{ theme: "material-darker" }}
                    value=""
                    height="80vh"
                    width="50vw"
                    onChange={(value, viewUpdate) => {
                        setRun({
                            runBtn: true,
                            code: value.getValue(),
                        });
                    }}
                />
                <Console code={code} />
            </div>
        </div>
    );
}

export default App;
