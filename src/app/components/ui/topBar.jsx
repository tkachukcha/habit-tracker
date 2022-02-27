import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { useAuth } from '../../hooks/useAuth';

const TopBar = ({ height, drawerWidth, onOpen }) => {
  const { currentUser } = useAuth();
  const location = useHistory().location.pathname;
  let title = '';
  switch (location) {
    case '/':
      title = 'Today';
      break;
    case '/habits':
      title = 'Habits';
      break;
    case '/login':
      title = '';
      break;
    case '/profile':
      title = 'Profile';
      break;
    default:
      break;
  }
  return (
    <AppBar
      position="fixed"
      sx={{
        height: height,
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` }
      }}
    >
      <Toolbar
        sx={{ display: 'flex', justifyContent: 'space-between', height, p: 2 }}
      >
        <Box sx={{ display: 'flex' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onOpen}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            {title}
          </Typography>
        </Box>
        {/* <Box> */}
        {currentUser ? (
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            {currentUser.name[0]}
          </Avatar>
        ) : (
          'Login'
        )}
        {/* </Box> */}
      </Toolbar>
    </AppBar>
  );
};
TopBar.propTypes = {
  height: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  drawerWidth: PropTypes.number,
  onOpen: PropTypes.func
};

export default TopBar;
