import { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { ContinentContext } from "../../context";
import styles from "./styles.module.scss";

export function FilterArea() {
  const { continent, setContinent } = useContext(ContinentContext);

  return (
    <div className={styles.container}>
      <form>
        <AiOutlineSearch className={styles.searchIcon} />
        <input type="text" placeholder="Search for a country..." />
      </form>
      <div className={styles.selectContainer}>
        <select
          name="regions"
          id="regions"
          value={continent}
          onChange={(e) => setContinent(e.target.value)}
        >
          <option value="Africa">África</option>
          <option value="Americas">América</option>
          <option value="Asia">Ásia</option>
          <option value="Europe">Europa</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}
