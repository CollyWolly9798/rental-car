import styles from './CarCard.module.css';
import LargeButton from '../LargeButton/LargeButton.jsx';
import Favorite from '../../../public/icons/Favorite.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorites } from '../../redux/favorites/slice.js';

export default function CarCard({ car }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = favorites.includes(car.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorites(car.id));
  };

  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <button className={styles.icon} onClick={handleFavoriteClick}>
          <Favorite isActive={isFavorite} />
        </button>
        <img src={car.img} alt={car.model} className={styles.img} />
      </div>

      <div className={styles.carWrapper}>
        <p>
          {car.brand} <span className={styles.model}>{car.model}</span>,{' '}
          {car.year}
        </p>
        <p>${car.rentalPrice}</p>
      </div>

      <div className={styles.carInfo}>
        <div className={styles.topInfo}>
          <span>{car.address.split(', ')[1]}</span>
          <span>{car.address.split(', ')[2]}</span>
          <span>{car.rentalCompany}</span>
        </div>

        <div>
          <span>{car.type}</span>
          <span>
            {car.mileage.toLocaleString('en-US').replace(/,/g, ' ')} km
          </span>
        </div>
      </div>

      <LargeButton text="Read more" />
    </div>
  );
}
