import styles from "./proTyping.module.css"

export default function ProTyping() {
    const keys = [["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["Z","X","C","V","B","N","M"]];
    return (
        <div>
            <div className={styles.keyLineContainer}>
                {keys.map((lines, index) => (
                    <div className={styles.keyContainer} style={{paddingLeft: `${10 * index}px`}}>
                        {lines.map((key, _) => (
                            <Key word={key}/>
                        ))}
                    </div>
                ))}
            </div>
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