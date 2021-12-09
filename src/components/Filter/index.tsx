import { AiOutlineSearch } from "react-icons/ai";
import styles from "./styles.module.scss";

export function FilterArea() {
  return (
    <div className={styles.container}>
      <div>
        <AiOutlineSearch className={styles.searchIcon} />
        <input type="text" placeholder="Search for a country..." />
      </div>
      <div className={styles.selectContainer}>
        <select name="regions" id="regions">
          <option value="filter" defaultValue="Todas">
            Todas
          </option>
          <option value="africa">África</option>
          <option value="africa">América</option>
          <option value="africa">Ásia</option>
          <option value="africa">Europa</option>
          <option value="africa">Oceania</option>
        </select>
      </div>
    </div>
  );
}
