import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

export const lightTheme = {
  primary: {
    main: '#20caf9',
    light: '#20caf9',
    dark: '#20caf9',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  // info: {
  //   light: '#E633FF',
  //   main: '#E633FF',
  //   dark: '#E633FF',
  //   contrastText: '#fff',
  // },
  // secondary: {
  //   main: '#E633FF',
  // },
  // text: {
  //   primary: '#2e2e2e',
  //   secondary: '#2e2e2e',
  //   disabled: '#424242',
  // },
  // //will be overridden if you choose diffrent value a color or gradient in the override
  // background: {
  //   paper: '#E633FF',
  //   default: '#E633FF',
  // },
};

const scrollBarLight = {
  scrollbarColor: '#6b6b6b #2b2b2b',
  '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
    backgroundColor: '#cccccc',
    width: '1em',
  },
  '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
    borderRadius: 8,
    backgroundColor: '#4a4947',

    minHeight: 24,
    border: '3px solid #cccccc',
  },
  '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
    backgroundColor: '#616060',
  },
  '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
    backgroundColor: '#616060',
  },
  '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#616060',
  },
  '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
    backgroundColor: '#2b2b2b',
  },
};

export const darkTheme = {
  primary: {
    light: '#E633FF',
    main: '#E633FF',
    dark: '#E633FF',
  },
  text: {
    primary: '#fff',
    secondary: '#fff',
    disabled: '#fff',
  },
  secondary: {
    main: 'rgba(255, 255, 255, 0.7)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  //will be overridden if you choose diffrent value a color or gradient in the override
  background: {
    paper: '#666666',
    default: '#666666',
  },
};

const scrollBarDark = {
  scrollbarColor: '#6b6b6b #2b2b2b',
  '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
    backgroundColor: '#2b2b2b',
    width: '1em',
  },
  '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
    borderRadius: 8,
    backgroundColor: '#6b6b6b',

    minHeight: 24,
    border: '3px solid #2b2b2b',
  },
  '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
    backgroundColor: '#959595',
  },
  '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
    backgroundColor: '#959595',
  },
  '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#959595',
  },
  '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
    backgroundColor: '#2b2b2b',
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          ...lightTheme,
        }
      : {
          ...darkTheme,
        }),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides:
        mode === 'light'
          ? {
              body: {
                //You can use a gradient as well, but you need to override it from here because the default theme (dark or light) don't accept any gradients.
                //background: 'linear-gradient(180deg, #fe6b8b 30%, #ff8e53 90%)',
                //backgroundRepeat: 'no-repeat',
                //backgroundAttachment: 'fixed',
                ...scrollBarLight,
              },
            }
          : {
              body: {
                ...scrollBarDark,
              },
            },
    },
  },
});
