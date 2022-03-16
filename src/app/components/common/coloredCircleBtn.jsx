import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import ColoredCircle from './coloredCircle';
import PropTypes from 'prop-types';

const ColoredCircleBtn = ({ color, onColorChoice, onClose }) => {
  return (
    <ButtonBase
      centerRipple
      sx={{ m: 1, borderRadius: '50%' }}
      onClick={() => {
        onColorChoice(color);
        onClose();
      }}
    >
      <ColoredCircle size="45px" color={color} />
    </ButtonBase>
  );
};
ColoredCircleBtn.propTypes = {
  color: PropTypes.string,
  onColorChoice: PropTypes.func,
  onClose: PropTypes.func
};

export default ColoredCircleBtn;
