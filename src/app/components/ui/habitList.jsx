import React from 'react';
import Habit from '../common/habit';
import Box from '@mui/material/Box';
import { icons } from '../../utils/icons';

const HabitList = () => {
  const habits = [
    {
      title: 'Медитация',
      icon: icons.love,
      streak: 2,
      color: 'black'
    },
    {
      title: 'Зарядка',
      icon: icons.running,
      streak: 2,
      color: 'black'
    },
    {
      title: 'Визуализация',
      icon: icons.eye,
      streak: 2,
      color: 'black'
    },
    {
      title: 'Здоровье',
      icon: icons.health,
      streak: 2,
      color: 'black'
    },
    {
      title: 'Испанский',
      icon: icons.language,
      streak: 2,
      color: 'red'
    },
    {
      title: 'Финансы',
      icon: icons.dollar,
      streak: 2,
      color: 'black'
    },
    {
      title: 'Чтение',
      icon: icons.reading,
      streak: 2,
      color: 'black'
    },
    {
      title: 'Дневник',
      icon: icons.diary,
      streak: 2,
      color: 'black'
    },
    {
      title: 'Растяжка',
      icon: icons.meditation,
      streak: 2,
      color: 'black'
    },
    {
      title: 'Медитация',
      icon: icons.love,
      streak: 2,
      color: 'black'
    }
  ];
  return (
    <>
      <Box sx={{ p: 2, width: { lg: '30%' } }}>
        {habits.map((h, i) => (
          <Habit
            key={i}
            title={h.title}
            icon={h.icon}
            color={h.color}
            streak={h.streak}
          />
        ))}
      </Box>
    </>
  );
};

export default HabitList;
