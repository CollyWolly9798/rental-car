import LocationIcon from '../../icons/LocationIcon.jsx';
import CalendarIcon from '../../icons/CalendarIcon.jsx';
import CheckIcon from '../../icons/CheckIcon.jsx';
import CarIcon from '../../icons/CarIcon.jsx';
import FuelIcon from '../../icons/FuelIcon.jsx';
import GearIcon from '../../icons/GearIcon.jsx';
import {
  getCityAndCountry,
  formatMileage,
  idFromImg,
} from '../../utils/formatters.js';

import styles from './AboutCar.module.css';

export default function AboutCar({ car }) {
  const { city, country } = getCityAndCountry(car.address);
  const idImage = idFromImg(car.img);

  const carSpecifications = [
    { icon: <CalendarIcon />, label: 'Year', value: car.year },
    { icon: <CarIcon />, label: 'Type', value: car.type },
    {
      icon: <FuelIcon />,
      label: 'Fuel Consumption',
      value: car.fuelConsumption,
    },
    { icon: <GearIcon />, label: 'Engine Size', value: car.engineSize },
  ];

  return (
    <div>
      <div className={styles.titleWrap}>
        <h2 className={styles.tittle}>
          {car.brand} {car.model}, {car.year}
          <span className={styles.span}>Id: {idImage}</span>
        </h2>
        <div className={styles.location}>
          <p className={styles.iconWrapper}>
            <LocationIcon />
            {city},{country}
          </p>
          <p className={styles.mileage}>
            Mileage: {formatMileage(car.mileage)} km
          </p>
        </div>
        <p className={styles.price}>${car.rentalPrice}</p>
        <p className={styles.desc}>{car.description}</p>
      </div>

      <div className={styles.aboutWrapper}>
        <div>
          <h3 className={styles.aboutDesc}>Rental Conditions: </h3>
          <ul className={styles.list}>
            {car.rentalConditions.map((condition, index) => (
              <li key={index} className={styles.iconWrapper}>
                <CheckIcon /> {condition}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={styles.aboutDesc}>Car Specifications:</h3>
          <ul className={styles.list}>
            {carSpecifications.map((spec, index) => (
              <li key={index} className={styles.iconWrapper}>
                {spec.icon}
                {spec.label}: {spec.value}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={styles.aboutDesc}>Accessories and functionalities:</h3>
          <ul className={styles.list}>
            {[...car.accessories, ...car.functionalities].map((item, index) => (
              <li key={index} className={styles.iconWrapper}>
                <CheckIcon /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
