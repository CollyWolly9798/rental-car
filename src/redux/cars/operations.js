import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (filters, thunkAPI) => {
    try {
      const {
        brand,
        rentalPrice,
        minMileage,
        maxMileage,
        limit = 12,
        page = 1,
      } = filters;

      const params = {
        brand,
        rentalPrice,
        minMileage,
        maxMileage,
        limit,
        page,
      };

      Object.keys(params).forEach(
        (key) =>
          (params[key] === '' || params[key] == null) && delete params[key]
      );

      const res = await axios.get('/cars', { params });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
