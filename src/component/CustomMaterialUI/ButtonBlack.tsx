import styled from '@emotion/styled';
import { Button } from '@mui/material';

const ButtonBlack = styled(Button)(() => ({
  color: 'white',
  fontWeight: 'bold',
  backgroundColor: 'rgb(71,73,73)',
  '&:hover': {
    backgroundColor: 'rgb(71,73,73)'
  }
}));

export default ButtonBlack;