import React from 'react';
import AddButton from '../components/common/addButton';
import HabitList from '../components/ui/habitList';
import HabitModal from '../components/ui/addEditHabit/habitModal';
import dayjs from 'dayjs';
import Typography from '@mui/material/Typography';

const Day = (date) => {

  return (
    <>
      <Typography variant="h2">{date}</Typography>
      <HabitList date={date} />
    </>
  );
};

export default Today;
