import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddHabitContent from './addHabitContent';

const closeBtnStyle = {
  position: 'absolute',
  top: '0.3rem',
  right: '0.3rem',
  p: 1
};

const modalStyle = {
  position: 'absolute',
  top: '1rem',
  left: '5%',
  right: '5%',
  bottom: '1rem',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  outline: 0,
  borderRadius: 3
};

const AddHabitModal = ({ onClose, open }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 200
      }}
    >
      <Fade in={open}>
        <Box sx={modalStyle}>
          <IconButton sx={closeBtnStyle} onClick={onClose} color="primary">
            <CloseIcon sx={{ fontSize: '1.7rem' }} />
          </IconButton>
          <AddHabitContent />
        </Box>
      </Fade>
    </Modal>
  );
};
AddHabitModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default AddHabitModal;
