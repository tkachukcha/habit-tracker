import React from 'react';
import Habit from '../common/habit';
import { icons } from '../../utils/icons';
import Card from '@mui/material/Card';

const HabitList = () => {
  const habits = [
    {
      title: 'Медитация',
      icon: icons.meditation,
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
      icon: icons.think,
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
      icon: icons.stretch,
      streak: 2,
      color: 'black'
    },
    {
      title: 'Медитация',
      icon: icons.meditation,
      streak: 2,
      color: 'black'
    }
  ];
  return (
    <>
      <Card sx={{ p: 2 }}>
        {habits.map((h, i) => (
          <Habit
            key={i}
            title={h.title}
            icon={h.icon}
            color={h.color}
            streak={h.streak}
          />
        ))}
      </Card>
    </>
  );
};

export default HabitList;
