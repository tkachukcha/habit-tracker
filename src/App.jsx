import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import Today from './app/pages/today';
import Login from './app/pages/login';
import Habits from './app/pages/habits';
import TopBar from './app/components/ui/topBar';
import Profile from './app/pages/profile';
import './scss/App.scss';
import { ToastContainer } from 'react-toastify';

// Mui

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/system';
import theme from './theme';
import Main from './app/layouts/main';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline enableColorScheme />
          <Main />
        </Box>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
}

export default App;
