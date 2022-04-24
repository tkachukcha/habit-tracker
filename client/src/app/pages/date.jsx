import React from 'react';
import HabitList from '../components/ui/habitList';
import dayjs from 'dayjs';
import Typography from '@mui/material/Typography';

const Date = (date) => {

  return (
    <>
      <Typography variant="h2">{date}</Typography>
      <HabitList date={date} />
    </>
  );
};

export default Date;
