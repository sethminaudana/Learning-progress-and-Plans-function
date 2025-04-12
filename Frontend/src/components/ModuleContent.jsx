// src/components/ModuleContent.jsx
import React from 'react';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ModuleContent() {
  const { planId } = useParams();
  const learningPlans = useSelector((state) => state.learningPlans);
  const plan = learningPlans.find((p) => p.planId === parseInt(planId));

  if (!plan) {
    return <Typography>Learning Plan not found.</Typography>;
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" component="h1">
        {plan.title}
      </Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Topics
      </Typography>
      <Typography variant="body2">{plan.topics}</Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>
        Resources
      </Typography>
      <Typography variant="body2">{plan.resources}</Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>
        Timeline
      </Typography>
      <Typography variant="body2">{plan.timeline}</Typography>
    </Box>
  );
}

export default ModuleContent;