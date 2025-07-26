import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setFilter } from '../../redux/filters/slice.js';
import { fetchBrands } from '../../redux/filters/operations.js';
import { clearCars } from '../../redux/cars/slice.js';
import { fetchCars } from '../../redux/cars/operations.js';
import LargeButton from '../LargeButton/LargeButton.jsx';

import styles from './SearchFilter.module.css';

export default function SearchFilter() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const handleFilterChange = (name, value) => {
    dispatch(setFilter({ name, value }));
  };

  const handleSearch = () => {
    dispatch(clearCars());
    dispatch(
      fetchCars({
        brand: filters.brand,
        rentalPrice: filters.rentalPrice,
        minMileage: filters.minMileage,
        maxMileage: filters.maxMileage,
        page: 1,
      })
    );
  };

  const price = [30, 40, 50, 60, 70, 80];

  const handlePriceChange = (e) => {
    handleFilterChange('rentalPrice', e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor="brand">
          Car brand
        </label>
        <select
          id="brand"
          name="brand"
          value={filters.brand}
          onChange={(e) => handleFilterChange('brand', e.target.value)}
        >
          <option value="" disabled hidden>
            Choose a brand
          </option>
          {filters.brands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor="price">
          Price/ 1 hour
        </label>
        <select
          id="price"
          name="price"
          value={filters.rentalPrice}
          onChange={handlePriceChange}
        >
          <option value="" disabled hidden>
            Choose a price
          </option>
          {price.map((price) => (
            <option key={price} value={price}>
              ${price}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor="mileage">
          Сar mileage / km
        </label>
        <div className={styles.mileageContainer}>
          <div className={styles.inputWrapper}>
            <span className={styles.placeholder}>From</span>
            <input
              id="mileage"
              className={styles.from}
              name="mileage"
              type="number"
              value={filters.minMileage}
              onChange={(e) => handleFilterChange('minMileage', e.target.value)}
            />
          </div>

          <div className={styles.inputWrapper}>
            <span className={styles.placeholder}>To</span>
            <input
              className={styles.to}
              name="mileage"
              type="number"
              value={filters.maxMileage}
              onChange={(e) => handleFilterChange('maxMileage', e.target.value)}
            />
          </div>
        </div>
      </div>
      <LargeButton text="Search" onClick={handleSearch} />
    </div>
  );
}
