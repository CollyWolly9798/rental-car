import { useDispatch, useSelector } from 'react-redux';
import CarCard from '../CarCard/CarCard.jsx';
import { useEffect } from 'react';
import { fetchCars } from '../../redux/cars/operations.js';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';
import Loader from '../Loader/Loader.jsx';

import styles from './CarsList.module.css';

export default function CarsList() {
  const dispatch = useDispatch();

  const { loading, cars, currentPage, totalPages } = useSelector(
    (state) => state.cars
  );
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    if (cars.length === 0 && currentPage === 1) {
      dispatch(fetchCars({ ...filters, page: 1 }));
    }
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    if (currentPage < totalPages && !loading) {
      dispatch(fetchCars({ page: currentPage + 1 }));
    }
  };

  return (
    <>
      {loading && <Loader />}
      {!loading && cars.length === 0 && <p>Cars not available</p>}
      <ul className={styles.list}>
        {cars.map((car) => (
          <li key={car.id} className={styles.item}>
            <CarCard car={car} />
          </li>
        ))}
      </ul>
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn onLoad={handleLoadMore} />
      )}
    </>
  );
}
