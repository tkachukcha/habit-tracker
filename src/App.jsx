import React, { useEffect } from 'react';
import './app/scss/App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Main from './app/layouts/main';
import Login from './app/layouts/login';
import ColorModeProvider from './app/hooks/useColorMode';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn, getUserData } from './app/store/users';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './app/components/common/protectedRoute';

function App() {
  return (
    <>
      <ColorModeProvider>
        <CssBaseline enableColorScheme />
        <Box sx={{ display: 'flex' }}>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <ProtectedRoute path="/">
              <Main />
            </ProtectedRoute>
          </Switch>
        </Box>
      </ColorModeProvider>

      <ToastContainer />
    </>
  );
}

export default App;
