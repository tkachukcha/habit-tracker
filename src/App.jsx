import React from 'react';
import './scss/App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Main from './app/layouts/main';
import ColorModeProvider from './app/hooks/useColorMode';
import AuthProvider from './app/hooks/useAuth';

function App() {
  return (
    <>
      <ColorModeProvider>
        <CssBaseline enableColorScheme />
        <AuthProvider>
          <Box sx={{ display: 'flex' }}>
            <Main />
          </Box>
        </AuthProvider>
      </ColorModeProvider>

      <ToastContainer />
    </>
  );
}

export default App;
