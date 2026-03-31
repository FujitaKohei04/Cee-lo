"use client";

import { useState } from "react";
import styles from "./CeeLo.module.css";
import { Die } from "@/app/components/Dice/Dice";

export function CeeLo() {  
    const [dice, setDie] = useState<number[]>([1, 1, 1]);

    const rollDice = () => {
        setDie([Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1]);
    }

    return (
    <div className={styles.ceeLoContainer}>
        
        <div className={styles.diceContainer}>
            <div className={styles.die}><Die pipCount={dice[0]} /></div>
            <div className={styles.die}><Die pipCount={dice[1]} /></div>
            <div className={styles.die}><Die pipCount={dice[2]} /></div>
        </div>
        <button 
            onClick={() => rollDice()}
        >
            <div className={styles.rollButton}>roll</div>
        </button>
    </div>
    );
}
