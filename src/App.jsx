import React from 'react';
import './app/scss/App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Main from './app/layouts/main';
import ColorModeProvider from './app/hooks/useColorMode';

function App() {
  return (
    <>
      <ColorModeProvider>
        <CssBaseline enableColorScheme />
        <Box sx={{ display: 'flex' }}>
          <Main />
        </Box>
      </ColorModeProvider>

      <ToastContainer />
    </>
  );
}

export default App;
