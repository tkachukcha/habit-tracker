import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const ColoredCircle = ({ color, size, onClick, margin }) => {
  return (
    <Box
      component="buttonbase"
      sx={{
        backgroundColor: color,
        width: size,
        height: size,
        borderRadius: '50%',
        boxShadow: 2,
        m: margin,
        cursor: onClick ? 'pointer' : 'default'
      }}
      onClick={onClick}
    ></Box>
  );
};
ColoredCircle.defaultProps = {
  color: '#fff',
  margin: 0
};
ColoredCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
  margin: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object
  ])
};

export default ColoredCircle;
