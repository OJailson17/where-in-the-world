import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";

import styles from "./styles.module.scss";

export default function Countries() {
  return (
    <main className={styles.container}>
      <div>
        <button>
          <BsArrowLeft />
          Back
        </button>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="https://via.placeholder.com/400x400"
            alt="Country flag"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className={styles.countryInfo}>
          <strong>Belgium</strong>

          <div className={styles.info}>
            <div>
              <p>
                Native Name: <span>Belgiê</span>
              </p>
              <p>
                Population: <span>11.319.511</span>
              </p>
              <p>
                Region: <span>Europe</span>
              </p>
              <p>
                Sub Region: <span>Western Europe</span>
              </p>
              <p>
                Capital: <span>Brussels</span>
              </p>
            </div>

            <div>
              <p>
                Top Level Domain: <span>.be</span>
              </p>
              <p>
                Currencies: <span>Euro</span>
              </p>
              <p>
                Languages: <span>Dutch, French, German</span>
              </p>
            </div>
          </div>

          <div className={styles.borderInfo}>
            <p>Border Countries:</p>

            <div>
              <div>France</div>
              <div>Germany</div>
              <div>Netherlands</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
