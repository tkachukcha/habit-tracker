import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { useColorMode } from '../../hooks/useColorMode';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Menu from './menu';
import Divider from '@mui/material/Divider';

const SideBarContent = ({ onHide, topBarHeight }) => {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();
  return (
    <div>
      <Toolbar>
        <IconButton
          sx={{ ml: 1, height: topBarHeight }}
          onClick={toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === 'dark' ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Toolbar>
      <Divider />
      <Menu onHide={onHide} />
    </div>
  );
};
SideBarContent.propTypes = {
  topBarHeight: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onHide: PropTypes.func
};

export default SideBarContent;
