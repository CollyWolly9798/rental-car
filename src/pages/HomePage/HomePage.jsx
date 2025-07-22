import { Link } from 'react-router-dom';
import LargeButton from '../../components/LargeButton/LargeButton.jsx';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <h1 className={styles.title}>Find your perfect rental car</h1>
        <p className={styles.text}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <Link to="/catalog">
          <LargeButton text="View Catalog" />
        </Link>
      </div>
    </section>
  );
}
