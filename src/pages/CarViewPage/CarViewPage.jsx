import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCarsDetails } from '../../redux/cars/operations.js';
import { clearCarsSelected } from '../../redux/cars/slice.js';
import BookForm from '../../components/BookForm/BookForm.jsx';
import AboutCar from '../../components/AboutCar/AboutCar.jsx';
import Loader from '../../components/Loader/Loader.jsx';

import styles from './CarViewPage.module.css';

export default function CarViewPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const car = useSelector((state) => state.cars.selectedCar);
  const loading = useSelector((state) => state.cars.carDetailsLoading);
  const error = useSelector((state) => state.cars.carDetailsError);

  useEffect(() => {
    dispatch(fetchCarsDetails(id));

    return () => {
      dispatch(clearCarsSelected());
    };
  }, [dispatch, id]);

  if (loading) return <Loader />;
  if (error) return <div>Error loading car details</div>;
  if (!car) return null;

  return (
    <div className="container">
      <div className={styles.contentContainer}>
        <div className={styles.image}>
          <img src={car.img} alt={car.model} />
          <BookForm />
        </div>
        <div className={styles.infoWrapper}>
          <AboutCar car={car} />
        </div>
      </div>
    </div>
  );
}
