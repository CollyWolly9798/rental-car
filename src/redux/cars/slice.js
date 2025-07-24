import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations.js';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    loading: false,
    error: null,
    totalCars: 0,
    totalPages: 0,
    currentPage: 1,
  },
  reducers: {
    clearCars(state) {
      state.cars = [];
      state.totalCars = 0;
      state.totalPages = 0;
      state.currentPage = 1;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        const { cars, totalCars, totalPages } = action.payload;
        const page = Number(action.payload.page);

        state.totalCars = totalCars;
        state.totalPages = totalPages;
        state.currentPage = page;

        if (page === 1) {
          state.cars = cars;
        } else {
          state.cars = [...state.cars, ...cars];
        }
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { clearCars } = carsSlice.actions;
export default carsSlice.reducer;
