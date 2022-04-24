import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Month = ({ date }) => {
  console.log(dayjs(date));
  return <h1>Month</h1>;
};
Month.defaultProps = {
  date: `01/${dayjs().format('MM/YYYY')}`
};
Month.propTypes = {
  date: PropTypes.string
};

export default Month;
