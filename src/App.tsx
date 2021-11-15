import React, { useContext } from 'react';
// Material UI *****************************************************************************/
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { getDesignTokens } from './components/Theme';
// COMPONENTS *****************************************************************************/
import AppPage from './components/AppPage';
// CONTEXT API ****************************************************************************/
import { miscContext } from './context/misc/MiscState';

// Important issue with context API, changing theme will rerender all child components on every change please be aware of this as it might affect performance.
function App() {
  const mContext = useContext(miscContext);
  const darkTheme = createTheme(getDesignTokens('dark'));
  const lightTheme = createTheme(getDesignTokens('light'));
  return (
    <ThemeProvider theme={mContext.theme === 'darkTheme' ? darkTheme : lightTheme}>
      <CssBaseline />
      <AppPage />
    </ThemeProvider>
  );
}

export default App;
