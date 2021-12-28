import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { api } from '../../services/api';

import styles from './styles.module.scss';

type CountrieProps = {
  countries: {
    flag: string;
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subRegion: string;
    capital: string;
    topLevelDomain: string[];
    currencies: string[];
    languages: string[];
    borderCountries: string[];
  }[];
};

export default function Countries({ countries }: CountrieProps) {
  return (
    <main className={styles.container}>
      <div>
        <Link href='/' passHref>
          <button>
            <BsArrowLeft />
            Back
          </button>
        </Link>
      </div>

      <div className={styles.contentContainer}>
        {countries.map(country => (
          <Fragment key={country.name}>
            <div className={styles.imageContainer}>
              <Image
                src={country.flag}
                alt='Country flag'
                layout='fill'
                objectFit='cover'
                priority
              />
            </div>

            <div className={styles.countryInfo}>
              <strong>{country.name}</strong>

              <div className={styles.info}>
                <div>
                  <p>
                    Native Name: <span>{country.nativeName}</span>
                  </p>
                  <p>
                    Population: <span>{country.population}</span>
                  </p>
                  <p>
                    Region: <span>{country.region}</span>
                  </p>
                  <p>
                    Sub Region: <span>{country.subRegion}</span>
                  </p>
                  <p>
                    Capital: <span>{country.capital}</span>
                  </p>
                </div>

                <div>
                  <p>
                    Top Level Domain:{' '}
                    {country.topLevelDomain.map(domain => (
                      <span key={domain}>{domain}</span>
                    ))}
                  </p>
                  <p>
                    Currencies:{' '}
                    {country.currencies.map(currency => (
                      <span key={currency}>{currency}</span>
                    ))}
                  </p>
                  <p>
                    Languages:{' '}
                    {country.languages.map(language => (
                      <span key={language}>{language}, </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className={styles.borderInfo}>
                <p>Border Countries:</p>
                <div>
                  {country.borderCountries.length < 1 ? (
                    <div>Nenhum País</div>
                  ) : (
                    country.borderCountries.map(country => (
                      <div key={country}>{country}</div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </main>
  );
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { country } = params;

  const { data } = await api.get(`/name/${country}`);

  const countries = data.map(country => {
    return {
      flag: country.flag,
      name: country.name,
      nativeName: country.nativeName,
      population: country.population,
      region: country.region,
      subRegion: country.subregion,
      capital: country.capital,
      topLevelDomain: country.topLevelDomain,
      currencies: country.currencies.map(currency => currency.name),
      languages: country.languages.map(language => language.name),
      borderCountries: country.borders || [],
    };
  });

  return {
    props: {
      countries,
    },
    revalidate: 60 * 60 * 48, // 2 dias
  };
};
