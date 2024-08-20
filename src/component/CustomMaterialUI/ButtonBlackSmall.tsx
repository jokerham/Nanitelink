import styled from '@emotion/styled';
import { Button } from '@mui/material';

const ButtonBlackSmall = styled(Button)(() => ({
  color: 'white',
  fontSize: '11px',
  fontWeight: 'bold',
  padding: '4px 0 4px 0',
  backgroundColor: 'black',
  '&:hover': {
    backgroundColor: 'black'
  }
}));

export default ButtonBlackSmall;