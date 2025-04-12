// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import learningPlanReducer from './learningPlanSlice';

const store = configureStore({
  reducer: {
    learningPlans: learningPlanReducer,
  },
});

export default store;