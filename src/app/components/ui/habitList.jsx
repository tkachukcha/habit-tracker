import React from 'react';
import Habit from '../common/habit';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { getHabits } from '../../store/habits';

const HabitList = () => {
  const habits = useSelector(getHabits());
  return (
    <>
      <Box sx={{ width: { lg: '30%' } }}>
        {habits.map((habit) => (
          <Habit
            key={habit._id}
            id={habit._id}
            title={habit.name}
            icon={habit.icon}
            color={habit.color}
            // streak={h.streak}
            daytime={habit.time}
          />
        ))}
      </Box>
    </>
  );
};

export default HabitList;
