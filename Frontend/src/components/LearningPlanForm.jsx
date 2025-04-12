// src/components/LearningPlanForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createLearningPlan } from '../Redux/learningPlanActions';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

function LearningPlanForm() {
  const [open, setOpen] = useState(false); // State to control the dialog
  const [title, setTitle] = useState('');
  const [topics, setTopics] = useState('');
  const [resources, setResources] = useState('');
  const [timeline, setTimeline] = useState('');
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true); // Open the dialog
  };

  const handleClose = () => {
    setOpen(false); // Close the dialog
  };

  const handleSubmit = () => {
    dispatch(createLearningPlan({ title, topics, resources, timeline })); // Dispatch action to create a plan
    handleClose(); // Close the dialog
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Learning Plan
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Learning Plan</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" label="Title" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
          <TextField margin="dense" label="Topics" fullWidth value={topics} onChange={(e) => setTopics(e.target.value)} />
          <TextField margin="dense" label="Resources" fullWidth value={resources} onChange={(e) => setResources(e.target.value)} />
          <TextField margin="dense" label="Timeline" fullWidth value={timeline} onChange={(e) => setTimeline(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LearningPlanForm;