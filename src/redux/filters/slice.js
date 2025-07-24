import { createSlice } from '@reduxjs/toolkit';
import { fetchBrands } from './operations.js';

const slice = createSlice({
  name: 'filter',
  initialState: {
    brand: '',
    rentalPrice: '',
    minMileage: '',
    maxMileage: '',
    brands: [],
    loading: false,
    error: null,
  },
  reducers: {
    setFilter: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetFilters(state) {
      state.brand = '';
      state.rentalPrice = '';
      state.minMileage = '';
      state.maxMileage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilter, resetFilters } = slice.actions;
export default slice.reducer;
