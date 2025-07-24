import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filters/slice.js';
import { useEffect } from 'react';
import { fetchBrands } from '../../redux/filters/operations.js';
import { clearCars } from '../../redux/cars/slice.js';
import { fetchCars } from '../../redux/cars/operations.js';

import styles from './SearchFilter.module.css';
import LargeButton from '../LargeButton/LargeButton.jsx';

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

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <label className={styles.label} for="brand">
          Car brand
        </label>
        <select
          name="brand"
          value={filters.brand}
          onChange={(e) => handleFilterChange('brand', e.target.value)}
        >
          <option value="">Choose a brand</option>
          {filters.brands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.wrapper}>
        <label className={styles.label} for="price">
          Price/ 1 hour
        </label>
        <select
          name="price"
          className={styles.select}
          value={filters.rentalPrice}
          onChange={(e) => handleFilterChange('rentalPrice', e.target.value)}
        >
          <option value="">Choose a price</option>
          <option value="30">$30</option>
          <option value="40">$40</option>
          <option value="50">$50</option>
          <option value="60">$60</option>
          <option value="70">$70</option>
        </select>
      </div>

      <div className={styles.wrapper}>
        <label className={styles.label} for="mileage">
          Сar mileage / km
        </label>
        <div className={styles.mileageContainer}>
          <div className={styles.inputWrapper}>
            <span className={styles.placeholder}>From</span>
            <input
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
