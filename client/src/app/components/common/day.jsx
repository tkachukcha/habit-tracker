import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Day = ({ date }) => {
  return (
    <>
      <div>{date.day}</div>
    </>
  );
};
Day.propTypes = {
  date: PropTypes.object
};

export default Day;
