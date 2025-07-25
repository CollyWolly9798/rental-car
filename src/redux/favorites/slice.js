import { createSlice } from '@reduxjs/toolkit';

const loadFromLS = () => {
  const stored = localStorage.getItem('favorites');
  return stored ? JSON.parse(stored) : [];
};

const slice = createSlice({
  name: 'favorites',
  initialState: loadFromLS(),
  reducers: {
    toggleFavorites: (state, action) => {
      const carId = action.payload;
      const index = state.indexOf(carId);

      if (index !== -1) {
        state.splice(index, 1);
      } else {
        state.push(carId);
      }

      localStorage.setItem('favorites', JSON.stringify(state));
    },
    clearFavorites() {
      localStorage.removeItem('favorites');
      return [];
    },
    loadFavorites(state) {
      const stored = loadFromLS();
      return stored;
    },
  },
});

export const { toggleFavorites, clearFavorites, loadFavorites } = slice.actions;
export default slice.reducer;
