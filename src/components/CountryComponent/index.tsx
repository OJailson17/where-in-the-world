import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

type CountryComponent = {
  flag?: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

export function CountryComponent(props: CountryComponent) {
  return (
    <Link href={`/country/${props.name}`} passHref>
      <div className={styles.container}>
        <div className="imageContainer">
          <Image
            src={props.flag}
            alt="Country flag"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="countryInfo">
          <strong>{props.name}</strong>
          <p>
            Population: <span>{props.population}</span>
          </p>
          <p>
            Region: <span>{props.region}</span>
          </p>
          <p>
            Capital: <span>{props.capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
