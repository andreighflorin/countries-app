import styles from "./Card.module.css";

const Card = ({ countries }) => {
  const countriesList = countries.map((item) => {
    return (
      <div key={item.name.official} className={styles.card}>
        <img
          className={styles.image}
          src={item.flags.svg}
          alt={item.flags.alt}
        />
        <h2 className={styles.name}>{item.name.common}</h2>
        <span className={styles.details}>Region: {item.region}</span>
        <span className={styles.details}>Capital: {item.capital}</span>
        <span className={styles.details}>Population: {item.population}</span>
      </div>
    );
  });

  return countriesList;
};

export default Card;
