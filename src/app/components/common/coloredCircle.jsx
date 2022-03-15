import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const ColoredCircle = ({ color, size }) => {
  return (
    <Box
      sx={{
        backgroundColor: color,
        width: size,
        height: size,
        borderRadius: '50%'
      }}
    ></Box>
  );
};
ColoredCircle.defaultProps = {
  color: '#fff'
};
ColoredCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
};

export default ColoredCircle;
