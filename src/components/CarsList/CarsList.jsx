import { useDispatch, useSelector } from 'react-redux';
import CarCard from '../CarCard/CarCard.jsx';
import { useEffect } from 'react';
import { fetchCars } from '../../redux/cars/operations.js';
import styles from './CarsList.module.css';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';

export default function CarsList() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.cars.loading);
  const cars = useSelector((state) => state.cars.cars);
  const currentPage = useSelector((state) => state.cars.currentPage);
  const totalPages = useSelector((state) => state.cars.totalPages);
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    if (cars.length === 0 && currentPage === 1) {
      dispatch(fetchCars({ ...filters, page: 1 }));
    }
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    if (currentPage < totalPages && !isLoading) {
      dispatch(fetchCars({ page: currentPage + 1 }));
    }
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ul className={styles.list}>
        {cars.map((car) => (
          <li key={car.id} className={styles.item}>
            <CarCard car={car} />
          </li>
        ))}
      </ul>
      {currentPage < totalPages && !isLoading && (
        <LoadMoreBtn onLoad={handleLoadMore} />
      )}
    </>
  );
}
