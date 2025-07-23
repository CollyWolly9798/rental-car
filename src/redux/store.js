import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/slice.js';
import favoritesReducer from './favorites/slice.js';
import filterReducer from './filters/slice.js';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: favoritesReducer,
    filters: filterReducer,
  },
});
