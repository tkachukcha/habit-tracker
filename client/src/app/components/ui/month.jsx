import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { getDays, getDaysData } from '../../store/days';

const Month = ({ date }) => {
  const firstDay = dayjs(date).date(1);
  const monthDays = [];
  const dispatch = useDispatch();
  const days = useSelector(getDays());

  const month = date.substring(0, 7);
  const filteredDays = days.filter((day) => day.date.includes(month));

  useEffect(() => {
    if (filteredDays.length === 1) {
      dispatch(getDaysData(date));
    }
  }, []);

  // const month = firstDay.format('YYYY-MM-');
  // const weekDay = firstDay.format('d');
  // const weekDayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  return <></>;
};
Month.defaultProps = {
  date: dayjs().format('YYYY-MM-DD')
};
Month.propTypes = {
  date: PropTypes.string
};

export default Month;
