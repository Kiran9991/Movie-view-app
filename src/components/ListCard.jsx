import imageUrl, { NOT_FOUND_IMG } from "../services/imageUrl";
import styles from "./ListCard.module.css";

const Card = ({ item }) => {
  const { poster_path, title, name, release_date, first_air_date } = item;

  const srcImg = poster_path ? imageUrl(poster_path) : NOT_FOUND_IMG;

  const displayTitle = (title || name || "").substring(0, 18);

  const date = new Date(release_date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={srcImg}
          alt={title}
          className={styles.image}
          loading="lazy"
          onError={(e) => {
            e.target.src = {NOT_FOUND_IMG};
          }}
        />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.title}>{displayTitle}</h3>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
};

export default function ListCard({ items, title = "Now Showing" }) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.heading}>{title}</h1>
      </header>

      <div className={styles.grid}>
        {items && items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

