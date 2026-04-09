import { CeeLo } from "./components/CeeLo/CeeLo";
import { Header } from "./components/Header/Header";
import styles from "./page.module.css";

export default function Main() {

  return (
    <div>
      <main className={styles.main}>
        <CeeLo />
      </main>
    </div>
  );
}
