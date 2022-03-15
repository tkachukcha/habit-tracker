import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  getIsLoggedIn,
  getDataStatus,
  getUserData
} from '../../../store/users';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const AppLoader = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn());
  const dataStatus = useSelector(getDataStatus());
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserData());
    }
  }, []);
  if (isLoggedIn && !dataStatus) {
    return (
      <Box sx={{ margin: '40vh auto' }}>
        <CircularProgress color="primary" />
      </Box>
    );
  }
  return children;
};
AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};
export default AppLoader;
