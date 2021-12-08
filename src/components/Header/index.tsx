import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.container}>
      <nav>
        <h1>Where in the World?</h1>
      </nav>
    </header>
  );
}
