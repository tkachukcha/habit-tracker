import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

const HabitName = ({ title }) => {
  return (
    <Typography
      variant="h6"
      sx={{ fontWeight: 'bold', fontSize: { xs: '1.1rem', sm: '1.2rem' } }}
    >
      {title}
    </Typography>
  );
};
HabitName.propTypes = {
  title: PropTypes.string
};

export default HabitName;
