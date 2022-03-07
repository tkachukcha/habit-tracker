import React, { useEffect } from 'react';
import './scss/App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Route, Switch, Redirect } from 'react-router-dom';

import Login from './layouts/login';

import Box from '@mui/material/Box';
import ProtectedRoute from './components/common/protectedRoute';
import Main from './layouts/main';

function App() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/login" component={Login} />
        </Switch>
      </Box>
      <ToastContainer />
    </>
  );
}

export default App;
