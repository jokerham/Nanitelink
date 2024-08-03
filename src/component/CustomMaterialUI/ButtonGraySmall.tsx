import styled from '@emotion/styled';
import { Button } from '@mui/material';

const ButtonGraySmall = styled(Button)(() => ({
  color: '#333333',
  fontSize: '11px',
  padding: '5px 0 5px 0',
  '&:hover': {
    backgroundColor: '#E6E6E6'
  }
}));

export default ButtonGraySmall;