import styled from '@emotion/styled';
import TextFieldFocusRedBorder from './TextFieldFocusRedBorder';

const TextFieldFocusRedBorderSmall = styled(TextFieldFocusRedBorder)(() => ({
  '& .MuiInputBase-input': {
    borderRadius: '5px',
    backgroundColor: 'white',
    padding: '4px 8px 4px 8px', // Set padding for the input element
    width: '200px'
  }
}));

export default TextFieldFocusRedBorderSmall;