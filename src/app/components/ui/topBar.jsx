import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const TopBar = ({ height, drawerWidth, onOpen }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        height: height,
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` }
      }}
    >
      <Toolbar sx={{ height, p: 2 }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onOpen}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Habit Tracker
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
TopBar.propTypes = {
  height: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  drawerWidth: PropTypes.string,
  onOpen: PropTypes.func
};

export default TopBar;
