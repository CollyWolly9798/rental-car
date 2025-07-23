import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    toggleFavorites: (state, action) => {
      const carId = action.payload;
      const index = state.indexOf(carId);

      if (index !== -1) {
        state.splice(index, 1);
      } else {
        state.push(carId);
      }
    },
    clearFavorites() {
      return [];
    },
  },
});

export const { toggleFavorites, clearFavorites } = slice.actions;
export default slice.reducer;
