"use client";

import { useState } from "react";
import styles from "./CeeLo.module.css";
import { Die } from "@/app/components/Dice/Dice";
import { HelpModal } from "../HelpModal/HelpModal";
import Modal from "react-modal";

export function CeeLo() {  
    Modal.setAppElement("body");
    const [dice, setDie] = useState<number[]>([1, 1, 1]);
    const [isOpenHelpModal, setIsOpenHelpModal] = useState(false);

    const rollDice = () => {
        setDie([Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1]);
    }

    return (
    <div 
        className={styles.ceeLoContainer}
    >
        <button 
            className={`${styles.button} ${styles.helpButton}`}
            onClick={() => setIsOpenHelpModal(true)}
        >?</button>
        <div className={styles.diceContainer}>
            <div className={styles.die}><Die pipCount={dice[0]} /></div>
            <div className={styles.die}><Die pipCount={dice[1]} /></div>
            <div className={styles.die}><Die pipCount={dice[2]} /></div>
        </div>
        <button 
            onClick={() => rollDice()}
        >
            <div className={styles.button}>roll</div>
        </button>
        <HelpModal isOpen={isOpenHelpModal} closeModal={() => setIsOpenHelpModal(false)} />
    </div>
    );
}
