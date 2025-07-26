import LargeButton from '../LargeButton/LargeButton.jsx';
import FavoriteIcon from '../../icons/FavoriteIcon.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorites } from '../../redux/favorites/slice.js';
import { Link } from 'react-router-dom';
import { formatMileage, getCityAndCountry } from '../../utils/formatters.js';

import styles from './CarCard.module.css';

export default function CarCard({ car }) {
  const { city, country } = getCityAndCountry(car.address);

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
          <FavoriteIcon isActive={isFavorite} />
        </button>
        <img src={car.img} alt={car.model} className={styles.img} />
      </div>

      <div className={styles.carWrapper}>
        <p className={styles.brandCar}>
          {car.brand} <span className={styles.model}>{car.model}</span>,
          {car.year}
        </p>
        <p>${car.rentalPrice}</p>
      </div>

      <div className={styles.carInfo}>
        <div className={styles.topInfo}>
          <span>{city}</span>
          <span>{country}</span>
          <span>{car.rentalCompany}</span>
        </div>

        <div>
          <span>{car.type}</span>
          <span>{formatMileage(car.mileage)} km</span>
        </div>
      </div>

      <Link to={`/catalog/${car.id}`}>
        <LargeButton text="Read more" />
      </Link>
    </div>
  );
}
