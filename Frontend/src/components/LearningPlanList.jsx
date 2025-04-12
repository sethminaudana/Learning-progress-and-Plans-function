// src/components/LearningPlanList.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLearningPlans, deleteLearningPlan1 } from '../Redux/learningPlanActions';
import { List, ListItem, ListItemText, IconButton, Card, CardContent, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

function LearningPlanList() {
  const learningPlans = useSelector((state) => state.learningPlans); // Get learning plans from Redux store
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLearningPlans()); // Fetch learning plans when component mounts
  }, [dispatch]);

  const handleDelete = (planId) => {
    dispatch(deleteLearningPlan1(planId)); // Dispatch action to delete a plan
  };

  return (
    <List>
      {learningPlans.map((plan) => (
        <ListItem key={plan.planId}>
          <Card style={{ width: '100%' }}>
            <CardContent>
            <Link to={`/plan/${plan.planId}`} style={{ textDecoration: 'none' }}>
              <Typography variant="h6">{plan.title}</Typography>
              <Typography variant="body2">Topics: {plan.topics}</Typography>
              <Typography variant="body2">Resources: {plan.resources}</Typography>
              <Typography variant="body2">Timeline: {plan.timeline}</Typography>
              </Link>
              <IconButton onClick={() => handleDelete(plan.planId)}>
                <DeleteIcon />
              </IconButton>
            </CardContent>
          </Card>
        </ListItem>
      ))}
    </List>
  );
}

export default LearningPlanList;