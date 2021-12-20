import React from "react";
import Run from "./Run";
import "./SecondHeader.css";
const SecondHeader = ({ run, setRun, setCode }) => {
    return (
        <div className="sec-header">
            <h1>Code</h1>
            <Run setRun={setRun} run={run} setCode={setCode} />
            <h1>Console</h1>
        </div>
    );
};

export default SecondHeader;
