import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    openNavbar: (state) => {
      state.isOpen = true;
    },
    closeNavbar: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openNavbar, closeNavbar } = toggleSlice.actions;
export default toggleSlice.reducer;
