import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import postReducer from '../features/posts/postSlice';
import toggleReducer from '../features/toggleNavbar/toggleSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    toggle: toggleReducer,
  },
});
