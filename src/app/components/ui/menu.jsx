import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const Menu = ({ onHide }) => {
  const links = [
    { path: '/', exact: true, title: 'Today' },
    { path: '/habits', exact: true, title: 'Habits' },
    { path: '/profile', exact: true, title: 'Profile' },
    { path: '/login', exact: true, title: 'Login' }
  ];
  return (
    <Box sx={{ display: 'flex', mt: 2, flexDirection: 'column' }}>
      {links.map((link) => (
        <Button
          key={link.title}
          component={NavLink}
          exact={link.exact}
          to={link.path}
          onClick={onHide}
          size="large"
          variant="contained"
          sx={{ mb: 1 }}
        >
          {link.title}
        </Button>
      ))}
    </Box>
  );
};
Menu.propTypes = {
  onHide: PropTypes.func
};

export default Menu;
