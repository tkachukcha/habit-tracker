import React from 'react';
import PropTypes from 'prop-types';
import HabitList from '../components/ui/habitList';
import dayjs from 'dayjs';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

const Date = ({ date, id }) => {
  return (
    <>
      <Typography variant="h4">{date}</Typography>
      {/* <HabitList date={date} /> */}
    </>
  );
};
Date.propTypes = {
  date: PropTypes.string,
  id: PropTypes.string
};

export default Date;
