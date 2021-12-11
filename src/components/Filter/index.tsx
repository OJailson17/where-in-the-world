import { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FilterContext } from "../../context";
import styles from "./styles.module.scss";

export function FilterArea() {
  const [searchedCountry, setSearchedCountry] = useState("");

  const { continent, setContinent, getSearchedCountry } =
    useContext(FilterContext);

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => getSearchedCountry(e, searchedCountry)}>
        <AiOutlineSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchedCountry}
          onChange={(e) => setSearchedCountry(e.target.value)}
        />
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
