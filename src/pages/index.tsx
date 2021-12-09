import { CountryComponent } from "../components/CountryComponent";
import { FilterArea } from "../components/Filter";

import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <FilterArea />

      <main className={styles.container}>
        <CountryComponent href="/country/1" />
        <CountryComponent href="/country/2" />
        <CountryComponent href="/country/3" />
        <CountryComponent href="/country/4" />
        <CountryComponent href="/country/5" />
        <CountryComponent href="/country/6" />
        <CountryComponent href="/country/7" />
        <CountryComponent href="/country/8" />
      </main>
    </>
  );
}
