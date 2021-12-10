import { GetStaticProps } from "next";
import { useContext, useEffect, useState } from "react";
import { CountryComponent } from "../components/CountryComponent";
import { FilterArea } from "../components/Filter";
import { ContinentContext } from "../context";
import { api } from "../services/api";

import styles from "../styles/home.module.scss";

type CountryPorps = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

type HomeProps = {
  countries: CountryPorps[];
};

export default function Home({ countries }: HomeProps) {
  const { continent } = useContext(ContinentContext);
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const filterCountry = countries.filter(
      (country) => country.region === continent
    );
    setCountriesData(filterCountry);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [continent]);

  return (
    <>
      <FilterArea />

      <main className={styles.container}>
        {countriesData.map((country) => (
          <CountryComponent
            name={country.name}
            capital={country.capital}
            population={country.population}
            region={country.region}
            flag={country.flag}
            key={country.name}
          />
        ))}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get(
    "/all?fields=name,capital,population,flag,region"
  );
  const countries = response.data;

  return {
    props: {
      countries,
    },
  };
};
