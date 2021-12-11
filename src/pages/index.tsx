import { GetStaticProps } from "next";
import { useContext, useEffect, useState } from "react";
import { CountryComponent } from "../components/CountryComponent";
import { FilterArea } from "../components/Filter";
import { FilterContext } from "../context";
import { api } from "../services/api";

import styles from "../styles/home.module.scss";

type CountryProps = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

type HomeProps = {
  countries: CountryProps[];
};

export default function Home({ countries }: HomeProps) {
  const { continent, searchedCountry } = useContext(FilterContext);
  const [countriesData, setCountriesData] = useState<CountryProps[]>([]);

  // Realiza uma chamada para a api buscando o país pelo nome
  const handleCountrySearch = async () => {
    const { data } = await api.get(`/name/${searchedCountry}`);

    if (data.status) {
      alert(`ERROR: ${data.message}`);
    } else {
      const countries = data.map((country) => {
        return {
          flag: country.flag,
          name: country.name,
          population: country.population,
          region: country.region,
          capital: country.capital,
        };
      });

      setCountriesData(countries);
    }
  };

  // Filtra os países por continente
  useEffect(() => {
    const filterCountry = countries.filter(
      (country) => country.region === continent
    );
    setCountriesData(filterCountry);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [continent]);

  // Verifica se o input está vazio e chama a função de busca
  useEffect(() => {
    if (searchedCountry.trim() === "") {
      return;
    } else {
      handleCountrySearch();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedCountry]);

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
