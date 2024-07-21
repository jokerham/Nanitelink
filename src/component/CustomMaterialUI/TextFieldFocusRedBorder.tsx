import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const TextFieldFocusRedBorder = styled(TextField)(({ theme }) => ({
  '& label.Mui-focused': {
    color: '#D9534F;', // Label color when focused
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#D9534F;', // Border color after underline when focused
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'grey', // Default border color
    },
    '&:hover fieldset': {
      borderColor: '#D9534F;', // Border color when hovered
    },
    '&.Mui-focused fieldset': {
      borderColor: '#D9534F;', // Border color when focused
    },
  },
}));

export default TextFieldFocusRedBorder