import React from "react";
import "./Run.css";

const Run = ({ run, setRun, setCode }) => {
    let str;
    const runHandler = () => {
        setRun({ runBtn: true, code: run.code });
        str = run.code;
        str = str.trim();
        str = str.replace(/(\r|\n|\s|\r)/g, "");
        let bfCode = "";
        for (let i = 0; i < str.length; i++) {
            if (
                str[i] === ">" ||
                str[i] === "<" ||
                str[i] === "+" ||
                str[i] === "-" ||
                str[i] === "." ||
                str[i] === "," ||
                str[i] === "[" ||
                str[i] === "]"
            ) {
                bfCode += str[i];
            }
        }
        setCode(bfCode);
    };
    return (
        <div>
            <button className="btn btn-2 btn-sep" onClick={runHandler}>
                Run
            </button>
        </div>
    );
};

export default Run;
