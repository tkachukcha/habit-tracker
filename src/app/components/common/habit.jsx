import React from 'react';
import Card from '@mui/material/Card';
import HabitName from './habitName';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import withIcon from './withIcon';
import icons from '../../utils/icons';

const Habit = ({ title, icon, streak, finished, color }) => {
  const iconObj = icons.find((i) => i.name === icon);
  const IconWithProps = withIcon(iconObj.component);
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', mb: 2, p: 1 }}>
      <Box sx={{ mr: 1, p: 2, display: 'grid', placeItems: 'center' }}>
        <IconWithProps sx={{ color, fontSize: '40px' }} />
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
  icon: PropTypes.string,
  streak: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  finished: PropTypes.bool
};

export default Habit;
