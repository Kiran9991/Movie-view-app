import styles from "./SideBar.module.css";

function MovieFilterSidebar({ title="Search results" }) {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.section}>
        <h4>Genre</h4>
        <ul>
          <li>Movie</li>
          <li>Tv-shows</li>
          <li>People</li>
        </ul>
      </div>

      {/* <div className={styles.section}>
        <h4>Rating</h4>
        <ul>
          <li>Above 9</li>
          <li>Above 8</li>
          <li>Above 7</li>
          <li>Above 6</li>
        </ul>
      </div> */}

      {/* <div className={styles.section}>
        <h4>Release Year</h4>
        <ul>
          <li>2024</li>
          <li>2023</li>
          <li>2022</li>
          <li>Older</li>
        </ul>
      </div> */}
    </aside>
  );
}

export default MovieFilterSidebar;
