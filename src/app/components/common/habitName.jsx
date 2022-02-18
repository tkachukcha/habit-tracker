import React from 'react';
import PropTypes from 'prop-types';

const HabitName = ({ title }) => {
  return <span className="h5">{title}</span>;
};
HabitName.propTypes = {
  title: PropTypes.string
};

export default HabitName;
