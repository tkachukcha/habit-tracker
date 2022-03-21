import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  getIsLoggedIn,
  getUserDataStatus,
  getUserData
} from '../../../store/users';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { getHabitDataStatus } from '../../../store/habits';

const AppLoader = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn());
  const userDataStatus = useSelector(getUserDataStatus());
  const habitDataStatus = useSelector(getHabitDataStatus());

  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserData());
    }
  }, []);
  if ((isLoggedIn && !habitDataStatus) || !userDataStatus) {
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
