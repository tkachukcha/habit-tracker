import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import IconSelectModal from './iconSelectModal';

const IconSelect = ({ icon, onChange }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        onClick={handleOpen}
        variant="outlined"
        sx={{ width: '70%', p: 1.5, color: 'white', borderColor: 'gray' }}
      >
        Choose icon...
      </Button>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '25%'
        }}
      >
        {/* <ColoredCircle color={color} size="50px" onClick={handleOpen} /> */}
      </Box>
      <IconSelectModal onClose={handleClose} open={open} onChange={onChange} />
    </Box>
  );
};
IconSelect.propTypes = {
  icon: PropTypes.string,
  onChange: PropTypes.func
};

export default IconSelect;
