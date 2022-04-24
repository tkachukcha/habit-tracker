import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { getDays, getDaysData } from '../../store/days';
import Box from '@mui/material/Box';
import Day from '../common/day';

const Month = ({ date }) => {
  const dispatch = useDispatch();
  const days = useSelector(getDays());

  const month = date.substring(0, 7);
  const filteredDays = days.filter((day) => day.date.includes(month));

  useEffect(() => {
    if (filteredDays.length === 1) {
      dispatch(getDaysData(date));
    }
  }, []);

  const monthLength = dayjs(date).daysInMonth();
  const monthDays = [];

  for (let i = 1; i <= monthLength; i++) {
    const date = `${month}-${i < 10 ? `0${i}` : i}`;
    const index = days.findIndex((day) => day.date === date);
    let isPerfect = false;
    let id = null;
    if (index !== -1) {
      isPerfect = days[index].isPerfect;
      id = days[index]._id;
    }
    monthDays.push({ id, date, isPerfect });
  }

  console.log(monthDays);

  // const firstDay = dayjs(date).date(1);
  // const weekDay = firstDay.format('d');
  // const weekDayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  return (
    <>
      <Box sx={{ width: '460px' }}>
        {monthDays.map((day) => (
          <Day key={day.date} {...day} />
        ))}
      </Box>
    </>
  );
};
Month.defaultProps = {
  date: dayjs().format('YYYY-MM-DD')
};
Month.propTypes = {
  date: PropTypes.string
};

export default Month;
