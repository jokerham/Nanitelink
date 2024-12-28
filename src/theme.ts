import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Helvetica, Nanum Gothic, Sans-serif',
    fontSize: 12,
    button: {
      textTransform: 'none'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px', // Rounded corners for all buttons
          textTransform: 'none', // Disable uppercase text
        },
        containedPrimary: {
          backgroundColor: '#ececec',
          color: '#000',
          '&:hover': {
            backgroundColor: '#cda25a',
            color: '#fff',
          },
        },
        containedWarning: {
          backgroundColor: '#ececec',
          color: '#000',
          '&:hover': {
            backgroundColor: '#D9534F',
            color: '#fff',
          },
        },
      },
    },
  },
});

export default theme;