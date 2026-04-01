import styles from "./Dice.module.css";

export function Die({pipCount}: {pipCount: number}) {
    return (
        <svg width="200" height="200" viewBox="0 0 200 200" className={styles.die}>
            {pipCount === 1 && <One />}
            {pipCount === 2 && <Two />}
            {pipCount === 3 && <Three />}
            {pipCount === 4 && <Four />}
            {pipCount === 5 && <Five />}
            {pipCount === 6 && <Six />}
        </svg>
    )
}

function One() {
    return (
        <g>
            <circle cx="100" cy="100" className={styles.pip} />
        </g>
    );
}

function Two() {
    return (
        <g>
            <circle cx="50" cy="50" r="20" className={styles.pip} />
            <circle cx="150" cy="150" r="20" className={styles.pip} />
        </g>
    );
}

function Three() {
    return (
        <g>
            <One />
            <Two />
        </g>
    );
}

function Four() {
    return (
        <g>
            <Two />
            <circle cx="50" cy="150" r="20" className={styles.pip} />
            <circle cx="150" cy="50" r="20" className={styles.pip} />
        </g>
    );
}

function Five() {
    return (
        <g>
            <Four />
            <circle cx="100" cy="100" r="20" className={styles.pip} />
        </g>
    );
}

function Six() {
    return (
        <g>
            <Four />
            <circle cx="50" cy="100" r="20" className={styles.pip} />
            <circle cx="150" cy="100" r="20" className={styles.pip} />
        </g>
    );
}