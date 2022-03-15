import React from 'react';
import Button from '@mui/material/Button';
import ColoredCircle from '../common/coloredCircle';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const ColorSelect = ({ color }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: 2,
        mb: 1
      }}
    >
      <Button
        variant="outlined"
        sx={{ width: '70%', p: 1.5, color, borderColor: color }}
      >
        Choose color...
      </Button>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '25%'
        }}
      >
        <ColoredCircle color={color} size="50px" />
      </Box>
    </Box>
  );
};
ColorSelect.propTypes = {
  color: PropTypes.string
};

export default ColorSelect;
