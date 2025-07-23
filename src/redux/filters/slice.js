import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: {
    brand: '',
    rentalPrice: '',
    minMileage: '',
    maxMileage: '',
  },
  reducers: {
    setFilter: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetFilters() {
      return {
        brand: '',
        rentalPrice: '',
        minMileage: '',
        maxMileage: '',
      };
    },
  },
});

export const { setFilter, resetFilters } = slice.actions;
export default slice.reducer;
