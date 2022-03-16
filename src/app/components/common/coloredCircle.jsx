import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const ColoredCircle = ({ color, size, onClick }) => {
  return (
    <Box
      component="buttonbase"
      sx={{
        backgroundColor: color,
        width: size,
        height: size,
        borderRadius: '50%',
        boxShadow: 2
      }}
      onClick={onClick}
    ></Box>
  );
};
ColoredCircle.defaultProps = {
  color: '#fff'
};
ColoredCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func
};

export default ColoredCircle;
