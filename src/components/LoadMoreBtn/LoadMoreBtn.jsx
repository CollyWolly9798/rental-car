import styles from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onLoad }) {
  return (
    <button className={styles.btn} onClick={onLoad}>
      Load More
    </button>
  );
}
