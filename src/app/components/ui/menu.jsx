import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { NavLink, useHistory } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TodayIcon from '@mui/icons-material/Today';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Menu = ({ onHide }) => {
  const location = useHistory().location.pathname;

  const links = [
    { path: '/', exact: true, title: 'Today', icon: <TodayIcon /> },
    {
      path: '/habits',
      exact: true,
      title: 'Habits',
      icon: <FormatListBulletedIcon />
    },
    {
      path: '/profile',
      exact: true,
      title: 'Profile',
      icon: <AccountCircleIcon />
    }
  ];

  const handleListItemClick = (event, index) => {
    onHide();
  };
  return (
    <Box sx={{ display: 'flex', mt: 2, flexDirection: 'column' }}>
      <List component="nav" aria-label="main mailbox folders">
        {links.map((link, ind) => (
          <ListItemButton
            component={NavLink}
            exact={link.exact}
            to={link.path}
            key={link.title + ind}
            selected={link.path === location}
            onClick={(event) => {
              handleListItemClick(event, ind);
            }}
          >
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText primary={link.title} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};
Menu.propTypes = {
  onHide: PropTypes.func
};

export default Menu;
