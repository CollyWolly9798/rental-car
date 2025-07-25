import { ClipLoader } from 'react-spinners';

import styles from './Loader.module.css';

export default function Loader({ size = 50, color = '#36d7b7' }) {
  return (
    <div className={styles.loaderWrap}>
      <ClipLoader size={size} color={color} />
    </div>
  );
}
