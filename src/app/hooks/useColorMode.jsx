import React, { useContext, useState, useMemo, useEffect } from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const useColorMode = () => {
  return useContext(ColorModeContext);
};

export default function ColorModeProvider({ children }) {
  const [mode, setMode] = useState('dark');
  const toggleColorMode = () => {
    setMode((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
ColorModeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};
