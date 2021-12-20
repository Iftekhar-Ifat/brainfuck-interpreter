import React from "react";
import "./Console.css";

const Console = ({ code }) => {
    let codeInArr = [...code];
    let memory = Array(30000).fill(0);
    let ptr = 0;
    let letter = [];
    let isLooping = false;
    let loopStack = [];
    let innerLoops = 0;
    for (let i = 0; i < codeInArr.length; i++) {
        const char = codeInArr[i];
        if (isLooping) {
            if (char === "[") {
                innerLoops++;
            }
            if (char === "]") {
                if (innerLoops === 0) {
                    isLooping = false;
                } else {
                    innerLoops--;
                }
            }
        }
        if (char === "+") {
            memory[ptr]++;
        } else if (char === "-") {
            memory[ptr]--;
        } else if (char === ">") {
            ptr++;
            memory[ptr] = memory[ptr] || 0;
        } else if (char === "<") {
            ptr--;
            memory[ptr] = memory[ptr] || 0;
        } else if (char === ".") {
            letter.push(memory[ptr]);
        } else if (char === "[") {
            memory[ptr] === 0 ? (isLooping = true) : loopStack.push(i);
        } else if (char === "]") {
            memory[ptr] !== 0
                ? (i = loopStack[loopStack.length - 1])
                : loopStack.pop();
        }
    }
    let codeStr = "";
    for (let i = 0; i < letter.length; i++) {
        let ch = String.fromCharCode(letter[i]);
        codeStr += ch;
    }
    return (
        <div className="console-div">
            {code.length ? (
                <h2 className="console-text"> >> {codeStr}</h2>
            ) : (
                <h2> >> </h2>
            )}
        </div>
    );
};

export default Console;
