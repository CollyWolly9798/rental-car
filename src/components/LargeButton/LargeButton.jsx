import styles from './LargeButton.module.css';

export default function LargeButton({ text, onClick }) {
  return (
    <button
      className={styles.btn}
      type="button"
      onClick={onClick ? onClick : undefined}
    >
      {text}
    </button>
  );
}
