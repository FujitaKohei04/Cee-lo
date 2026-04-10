import styles from "./proTyping.module.css"

export default function ProTyping() {
    return (
        <div>
            <KeyBoard />
        </div>
    );
}

function KeyBoard() {
    const keys = [["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"], ["A", "S", "D", "F", "G", "H", "J", "K", "L"], ["Z", "X", "C", "V", "B", "N", "M"]];

    return ( 
        <div className={styles.keyLineContainer}>
            {keys.map((lines, index) => (
                <div key={index} className={styles.keyContainer} style={{ paddingLeft: `${10 * index}px` }}>
                    {lines.map((key, indexL) => (
                        <Key key={indexL} word={key} />
                    ))}
                </div>
            ))}
        </div>
    );
}

function Key({word}: {word: string}) {
    return (
        <div className={styles.key}>
            {word}
        </div>
    );
}