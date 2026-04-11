"use client"
import { useState } from "react";
import styles from "./proTyping.module.css"

export default function ProTyping() {
    return (
        <div>
            <TypeSystem />
        </div>
    );
}

function TypeSystem() {
    const text = 
`function TypeSystem() {
    const text = "hello";
    const [index, setIndex] = useState<number>(0);
    const [downKey, setDownKey] = useState<string>("");


    const handleType = (e: React.KeyboardEvent) => {
        setDownKey(e.key);

        if (e.key === text[index]) {
            setIndex(index + 1);
        } else {
            console.log("miss");
        }
    };

    return (
        <div>
            <div tabIndex={0} onKeyDown={handleType} onKeyUp={() => setDownKey("")}>
                <p>
                    {text.split("").map((char, i) => (
                        <span
                            key={i}
                            style={{
                                color: i < index ? "gray" : i === index ? "red" : "black",
                            }}
                        >
                            {char}
                        </span>
                    ))}
                </p>
            </div>
            {/* <KeyBoard downKey={downKey} /> */}
        </div>
    )
}}`.replace(/ {4}/g, "\t");

    const [index, setIndex] = useState<number>(0); 
    const [downKey, setDownKey] = useState<string>("");
    const [tabNum, setTabNum] = useState<number>(0);

    const handleType = (e: React.KeyboardEvent) => {
        setDownKey(e.key);
        
        if (e.key === text[index]) {
            setIndex(index+1);
        } else if (e.key === "Enter" && text[index] === "\n") { 
            setIndex(index + 1);
        } else if (e.key === "Tab") {
            e.preventDefault();
            if (text[index] === "\t") setIndex(index + 1);
        } else {
            console.log(e.key);
        }
    };

    return (
        <div>
            <div tabIndex={0} onKeyDown={handleType} onKeyUp={() => setDownKey("")}>
                <p style={{ whiteSpace: "pre"}}>
                    {text.split("").map((char, i) => (
                        <span
                            key={i}
                            style={{
                                color: i < index ? "gray" : i === index ? "red" : "black",
                                borderLeft: i === index ? "2px solid black" : "none",
                            }}
                        >
                            {char}
                        </span>
                    ))}
                </p>
            </div>
            {/* <KeyBoard downKey={downKey} /> */}
        </div>
    )
}

function KeyBoard({ downKey }: { downKey: string }) {
    const keys = [
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"], 
        ["a", "s", "d", "f", "g", "h", "j", "k", "l"], 
        ["z", "x", "c", "v", "b", "n", "m"]];

    return ( 
        <div className={styles.keyLineContainer}>
            {keys.map((lines, index) => (
                <div key={index} className={styles.keyContainer} style={{ paddingLeft: `${10 * index}px` }}>
                    {lines.map((key, indexL) => (
                        <Key key={indexL} word={key} isType={downKey === key ? true : false}/>
                    ))}
                </div>
            ))}
        </div>
    );
}

function Key({ word, isType }: { word: string, isType: boolean}) {
    return (
        <div className={styles.key} style={{background: isType ? "black" : "#ccc"}}>
            {word.toUpperCase()}
        </div>
    );
}