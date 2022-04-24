import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { getDays, getDaysData } from '../../store/days';

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
    monthDays.push(`${month}-${i < 10 ? `0${i}` : i}`);
  }

  // const firstDay = dayjs(date).date(1);
  // const weekDay = firstDay.format('d');
  // const weekDayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  return (
    <>
      <ul>
        {monthDays.map((day) => (
          <li key={day}>{day.slice(-2)}</li>
        ))}
      </ul>
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
