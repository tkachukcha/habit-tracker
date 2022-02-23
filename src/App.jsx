import React from 'react';
import './scss/App.scss';
import { ToastContainer } from 'react-toastify';

// Mui

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
