import React from 'react';
import Habit from '../common/habit';
import { icons } from '../../utils/icons';

const HabitList = () => {
  return (
    <>
      <Habit
        title="Meditation"
        icon={icons.meditation}
        streak="5"
        color="violet"
      />
      <Habit title="Зарядка" icon={icons.running} streak="2" />
      <Habit title="Визуализация" icon={icons.think} streak="5" />
      <Habit title="Здоровье" icon={icons.health} streak="5" color="#3332ff" />
      <Habit title="Испанский" icon={icons.language} streak="5" />
      <Habit title="Финансы" icon={icons.dollar} streak="5" />
      <Habit title="Чтение" icon={icons.reading} streak="5" />
      <Habit title="Дневник" icon={icons.diary} streak="5" />
      <Habit title="Растяжка" icon={icons.stretch} streak="5" />
      <Habit title="Meditation" icon={icons.meditation} streak="5" />
    </>
  );
};

export default HabitList;
