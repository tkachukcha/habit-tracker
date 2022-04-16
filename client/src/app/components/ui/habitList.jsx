import React from 'react';
import Habit from '../common/habit';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { getHabits } from '../../store/habits';
import Typography from '@mui/material/Typography';

const HabitList = () => {
  const habits = useSelector(getHabits());
  return (
    <>
      <Box sx={{ width: { lg: '30%' } }}>
        <Typography variant="h6" gutterBottom={true}>
          Morning
        </Typography>
        {habits
          .filter((h) => h.time === 'morning')
          .map((habit) => (
            <Habit
              key={`${habit._id}-${habit.name}`}
              id={habit._id}
              title={habit.name}
              icon={habit.icon}
              color={habit.color}
              // streak={h.streak}
              daytime={habit.time}
            />
          ))}
        <Typography variant="h6" gutterBottom={true}>
          {habits.filter((h) => h.time === 'afternoon').length > 0 &&
            'Afternoon'}
        </Typography>
        {habits
          .filter((h) => h.time === 'afternoon')
          .map((habit) => (
            <Habit
              key={`${habit._id}-${habit.name}`}
              id={habit._id}
              title={habit.name}
              icon={habit.icon}
              color={habit.color}
              // streak={h.streak}
              daytime={habit.time}
            />
          ))}
        <Typography variant="h6" gutterBottom={true}>
          Evening
        </Typography>
        {habits
          .filter((h) => h.time === 'evening')
          .map((habit) => (
            <Habit
              key={`${habit._id}-${habit.name}`}
              id={habit._id}
              title={habit.name}
              icon={habit.icon}
              color={habit.color}
              // streak={h.streak}
              daytime={habit.time}
            />
          ))}
        <Typography variant="h6" gutterBottom={true}>
          Anytime
        </Typography>
        {habits
          .filter((h) => h.time === 'anytime')
          .map((habit) => (
            <Habit
              key={`${habit._id}-${habit.name}`}
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
