import { CountryComponent } from "../components/CountryComponent";
import { FilterArea } from "../components/Filter";

import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <FilterArea />

      <main className={styles.container}>
        <CountryComponent />
        <CountryComponent />
        <CountryComponent />
        <CountryComponent />
        <CountryComponent />
        <CountryComponent />
        <CountryComponent />
        <CountryComponent />
      </main>
    </>
  );
}
