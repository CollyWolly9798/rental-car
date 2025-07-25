import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo.jsx';
import styles from './Header.module.css';
import { clsx } from 'clsx';

export default function Header() {
  const getLinkStyles = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.active);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.wrapper}>
          <Link to="/">
            <Logo />
          </Link>
          <ul className={styles.list}>
            <li>
              <NavLink to="/" className={getLinkStyles}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" className={getLinkStyles}>
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
