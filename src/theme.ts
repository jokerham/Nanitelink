import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Nanum Gothic, Sans-serif',
    fontSize: 12,
    h5: {
      fontFamily: 'Arial',
    },
    button: {
      textTransform: 'none'
    }
  }
});

export default theme;