import React from 'react';
import Card from '@mui/material/Card';
import HabitName from './habitName';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import withIcon from './withIcon';
import icons from '../../utils/icons';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import HabitModal from '../ui/addEditHabit/habitModal';

const Habit = ({ title, icon, streak, finished, color, daytime }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const iconObj = icons.find((i) => i.name === icon);
  const IconWithProps = withIcon(iconObj.component);
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
      <Tooltip title="Edit">
        <IconButton onClick={handleOpen}>
          <MoreVertIcon />
        </IconButton>
      </Tooltip>
      <HabitModal
        type="edit"
        open={open}
        onClose={handleClose}
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
  title: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  daytime: PropTypes.string,
  streak: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  finished: PropTypes.bool
};

export default Habit;
