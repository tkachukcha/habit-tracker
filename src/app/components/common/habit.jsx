import React from 'react';
import Card from '@mui/material/Card';
import HabitName from './habitName';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import withIcon from './withIcon';

const Habit = ({ title, icon, streak, finished, color }) => {
  const IconWithProps = withIcon(icon.component);
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', mb: 2, p: 1 }}>
      <Box sx={{ mr: 1, p: 2 }}>
        <IconWithProps fontSize="large" sx={{ color }} />
      </Box>
      <Box>
        <HabitName title={title} />
        <Box>{streak}-day streak</Box>
      </Box>
    </Card>
  );
};
Habit.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.object,
  streak: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  finished: PropTypes.bool
};

export default Habit;
