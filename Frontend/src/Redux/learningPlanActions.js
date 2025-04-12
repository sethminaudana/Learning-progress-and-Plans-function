// src/actions/learningPlanActions.js
import { setLearningPlans, addLearningPlan, updateLearningPlan, deleteLearningPlan } from './learningPlanSlice';
import learningPlanService from '../api/learningPlanService';

// Async action to fetch all learning plans from the API
export const fetchLearningPlans = () => async (dispatch) => {
  try {
   // const plans = await learningPlanService.getAllLearningPlans();
   // dispatch(setLearningPlans(plans)); // Dispatch the fetched plans to the Redux store
  } catch (error) {
    console.error('Error fetching learning plans:', error);
  }
};

// Async action to create a new learning plan
export const createLearningPlan = (planData) => async (dispatch) => {
  try {
    const newPlan = await learningPlanService.createLearningPlan(planData);
    dispatch(addLearningPlan(newPlan)); // Dispatch the new plan to the Redux store
  } catch (error) {
    console.error('Error creating learning plan:', error);
  }
};

// Async action to update an existing learning plan
export const updateLearningPlan1 = (planId, planData) => async (dispatch) => {
  try {
    const updatedPlan = await learningPlanService.updateLearningPlan(planId, planData);
    dispatch(updateLearningPlan(updatedPlan)); // Dispatch the updated plan to the Redux store
  } catch (error) {
    console.error('Error updating learning plan:', error);
  }
};

// Async action to delete a learning plan
export const deleteLearningPlan1 = (planId) => async (dispatch) => {
  try {
    await learningPlanService.deleteLearningPlan(planId);
    dispatch(deleteLearningPlan(planId)); // Dispatch the plan ID to delete from the Redux store
  } catch (error) {
    console.error('Error deleting learning plan:', error);
  }
};