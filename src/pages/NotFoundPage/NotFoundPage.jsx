import { Link } from 'react-router-dom';

import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.message}>Page Not Found</h2>
      <p className={styles.description}>
        Sorry,the page you are looking for does not exist.
      </p>
      <Link className={styles.homeButton} to="/">
        Home
      </Link>
    </div>
  );
}
