import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';

const SideBar = ({ drawerWidth, mobileOpen, drawer, onClose }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            p: 2
          }
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            p: 2
          }
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
SideBar.propTypes = {
  drawerWidth: PropTypes.string,
  mobileOpen: PropTypes.bool,
  drawer: PropTypes.element,
  onClose: PropTypes.func
};

export default SideBar;
