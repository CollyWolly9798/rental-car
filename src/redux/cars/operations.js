import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearCars } from './slice.js';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (filters, thunkAPI) => {
    try {
      if (filters.page === 1) {
        thunkAPI.dispatch(clearCars());
      }

      const params = {
        brand: filters.brand,
        rentalPrice: filters.rentalPrice,
        minMileage: filters.minMileage,
        maxMileage: filters.maxMileage,
        page: filters.page,
      };

      const res = await axios.get('/cars', { params });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
