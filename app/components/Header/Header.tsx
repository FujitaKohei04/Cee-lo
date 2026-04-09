import Link from "next/link";
import styles from "./Header.module.css"

export default function Header() {
    return (
        <header>
            <nav className={styles.navContainer}>
                <Link href="/">home</Link>
                <Link href="/pages/proTyping">Typing</Link>
            </nav>
        </header>
    );
}