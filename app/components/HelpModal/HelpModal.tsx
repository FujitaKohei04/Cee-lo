import Modal from "react-modal";
import styles from "./HelpModal.module.css";
import { Die } from "../Dice/Dice";

export const HelpModal = ({ isOpen, closeModal }: {isOpen: boolean, closeModal: () => void}) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            portalClassName="ceeLoContainer"
        >
            <button onClick={closeModal}>x</button>
            <div className={styles.descContainer}>
                <Comb pipCounts={[1, 1, 1]} name="Triples" desc="x3"/>
                <Comb pipCounts={[4, 5, 6]} name="High Straight" desc="x2"/>
                <Comb pipCounts={[2, 2, 4]} name="Point" desc="x1"/>
                <Comb pipCounts={[1, 2, 4]} name="No Combination" desc="x1"/>
                <Comb pipCounts={[1, 2, 3]} name="Low Straight" desc="x-2"/>
            </div>
        </Modal>
    )
}

const Comb = ({ pipCounts, name, desc }: {pipCounts: number[], name: string, desc: string}) => {
    return (
        <div className={styles.combContainer}>
            <div className={styles.die}>
                <Die pipCount={pipCounts[0]}></Die>
            </div>
            <div className={styles.die}>
                <Die pipCount={pipCounts[1]}></Die>
            </div>
            <div className={styles.die}>
                <Die pipCount={pipCounts[2]}></Die>
            </div>
            <div className={styles.name}>{name}</div>
            <div className={styles.desc}>{desc}</div>
        </div>
    )
}