import React from 'react';
import Card from '@mui/material/Card';
import HabitName from './habitName';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

const Habit = ({ title, icon, streak, finished, color }) => {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', mb: 2, p: 1 }}>
      <Box sx={{ color, mr: 1 }}>{icon.component}</Box>
      <div>
        <HabitName title={title} />
        <div>{streak}-day streak</div>
      </div>
    </Card>
  );
};
Habit.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.object,
  streak: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  finished: PropTypes.bool
};

export default Habit;
