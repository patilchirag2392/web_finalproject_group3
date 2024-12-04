import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';

// Load persisted state from localStorage
const preloadedState = {
  auth: {
    isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) || false,
    role: localStorage.getItem('role') || null,
    userId: localStorage.getItem('userId') || null,
  },
};

// Configure the Redux store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState, // Apply the preloaded state
});

export default store;
