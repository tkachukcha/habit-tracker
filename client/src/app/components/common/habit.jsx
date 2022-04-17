import React, { useState } from 'react';
import Card from '@mui/material/Card';
import HabitName from './habitName';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import withIcon from './withIcon';
import icons from '../../utils/icons';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import HabitModal from '../ui/addEditHabit/habitModal';

const paperProps = {
  elevation: 0,
  sx: {
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1.5,
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0
    }
  }
};

const Habit = ({ id, title, icon, streak, finished, color, daytime }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalToggle = () => setModalOpen((prevState) => !prevState);

  const iconObj = icons.find((i) => i.name === icon);
  const IconWithProps = withIcon(iconObj.component);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 2,
        pr: 1.5
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          p: 1
        }}
      >
        <Box sx={{ mr: 1, p: 1, display: 'grid', placeItems: 'center' }}>
          <IconWithProps sx={{ color, fontSize: '40px' }} />
        </Box>
        <div>
          <HabitName title={title} />
          {/* <Box>{streak}-day streak</Box> */}
          <div>10-day streak</div>
        </div>
      </Box>

      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={paperProps}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleModalToggle}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          Edit
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>

      <HabitModal
        type="edit"
        open={modalOpen}
        onClose={handleModalToggle}
        id={id}
        initialValues={{
          name: title,
          color: color,
          time: daytime,
          icon: icon
        }}
      />
    </Card>
  );
};
Habit.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  daytime: PropTypes.string,
  streak: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  finished: PropTypes.bool
};

export default Habit;
