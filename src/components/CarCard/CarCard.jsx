import styles from './CarCard.module.css';
import LargeButton from '../LargeButton/LargeButton.jsx';

export default function CarCard({ car }) {
  return (
    <div className={styles.card}>
      <img src={car.img} alt={car.model} className={styles.img} />
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
