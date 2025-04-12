// src/reducers/learningPlanSlice.js
import { createSlice } from '@reduxjs/toolkit';

const learningPlanSlice = createSlice({
  name: 'learningPlans',
  initialState: [
    {
      planId: 1,
      title: 'Learn Web Development Basics',
      topics: 'HTML, CSS, JavaScript',
      resources: 'MDN Web Docs, Codecademy',
      timeline: '2024-12-31',
    },
    {
      planId: 2,
      title: 'Master Python Programming',
      topics: 'Variables, Loops, Functions, Data Structures',
      resources: 'Python Documentation, Udemy Course',
      timeline: '2025-06-30',
    },
    {
      planId: 3,
      title: 'Photography Fundamentals',
      topics: 'Exposure, Composition, Editing',
      resources: 'YouTube Tutorials, Local Photography Workshop',
      timeline: '2024-11-15',
    },
  ],
  reducers: {
    setLearningPlans: (state, action) => {
      return action.payload; // Replace the entire state with the payload
    },
    addLearningPlan: (state, action) => {
      state.push(action.payload); // Add a new learning plan to the state
    },
    updateLearningPlan: (state, action) => {
      // Find the index of the learning plan to update
      const index = state.findIndex(plan => plan.planId === action.payload.planId);
      if (index !== -1) {
        state[index] = action.payload; // Replace the existing plan with the updated one
      }
    },
    deleteLearningPlan: (state, action) => {
      // Filter out the learning plan with the specified ID
      return state.filter(plan => plan.planId !== action.payload);
    },
  },
});

export const {
  setLearningPlans,
  addLearningPlan,
  updateLearningPlan,
  deleteLearningPlan,
} = learningPlanSlice.actions;

export default learningPlanSlice.reducer;