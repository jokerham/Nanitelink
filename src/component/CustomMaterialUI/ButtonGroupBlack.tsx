import styled from '@emotion/styled';
import { ButtonGroup } from '@mui/material';

const ButtonGroupBlack = styled(ButtonGroup)(() => ({
  '& .MuiButtonGroup-grouped': {
    borderColor: 'rgb(71,73,73)',
  },
}));

export default ButtonGroupBlack;
