import styles from './LargeButton.module.css';

export default function LargeButton({ text, type = 'button', onClick }) {
  return (
    <button
      className={styles.btn}
      type={type}
      onClick={onClick ? onClick : undefined}
    >
      {text}
    </button>
  );
}
