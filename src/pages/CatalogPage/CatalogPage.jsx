import CarsList from '../../components/CarsList/CarsList.jsx';
import SearchFilter from '../../components/SearchFilter/SearchFilter.jsx';

import styles from './CatalogPage.module.css';

export default function CatalogPage() {
  return (
    <div className={`container ${styles.catalogCont}`}>
      <SearchFilter />
      <CarsList />
    </div>
  );
}
