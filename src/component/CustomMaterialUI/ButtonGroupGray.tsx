import styled from "@emotion/styled";
import { ButtonGroup } from "@mui/material";

const ButtonGroupGray = styled(ButtonGroup)(({ theme }) => ({
  margin: '5px 15px 5px 15px',
  '& .MuiButtonGroup-grouped': {
    borderColor: 'rgb(204,204,204)',
  },
}));

export default ButtonGroupGray;
