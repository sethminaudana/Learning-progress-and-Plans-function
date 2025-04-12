// src/api/learningPlanService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/learning-plans'; // Replace with your API URL

const learningPlanService = {
  // Function to fetch all learning plans
  getAllLearningPlans: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },
  // Function to create a new learning plan
  createLearningPlan: async (planData) => {
    const response = await axios.post(API_URL, planData);
    return response.data;
  },
  // Function to update an existing learning plan
  updateLearningPlan: async (planId, planData) => {
    const response = await axios.put(`<span class="math-inline">\{API\_URL\}/</span>{planId}`, planData);
    return response.data;
  },
  // Function to delete a learning plan
  deleteLearningPlan: async (planId) => {
    await axios.delete(`<span class="math-inline">\{API\_URL\}/</span>{planId}`);
  },
};

export default learningPlanService;