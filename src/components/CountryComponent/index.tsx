import Image from "next/image";
import styles from "./styles.module.scss";

export function CountryComponent() {
  return (
    <div className={styles.container}>
      <div className="imageContainer">
        <Image
          src="https://via.placeholder.com/320x200"
          alt="Country flag"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="countryInfo">
        <strong>The United States of America</strong>
        <p>
          Population: <span>81,770,000</span>
        </p>
        <p>
          Region: <span>Europe</span>
        </p>
        <p>
          Capital: <span>Berlin</span>
        </p>
      </div>
    </div>
  );
}
