import styled from '@emotion/styled';
import { Button } from '@mui/material';

const ButtonText = styled(Button)(() => ({
  color: 'black',
  fontSize: '14px',
  padding: '0 10px 0 10px',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '&:active': {
    backgroundColor: 'transparent',
  }
}));

export default ButtonText;