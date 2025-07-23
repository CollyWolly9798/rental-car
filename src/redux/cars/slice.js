import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations.js';

const slice = createSlice({
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

export const { clearCars } = slice.actions;
export default slice.reducer;
