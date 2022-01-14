import { amber, deepOrange, grey } from '@mui/material/colors';
import * as React from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { ColorModeContext } from '../context/ColorModeContext';
import { darkThemeOptions } from './dark-theme-options';
import { lightThemeOptions } from './light-theme-options';
import { baseThemeOptions } from './base-theme-options';
export default function AppThemeProvider(props) {
    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
  
    const theme = React.useMemo(
        () =>
          createTheme(
            baseThemeOptions,
            mode === 'light' ? lightThemeOptions  : darkThemeOptions,
          
          ),
        [mode],
      );
  
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
         {props.children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }