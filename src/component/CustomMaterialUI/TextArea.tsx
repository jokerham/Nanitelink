import TextField from '@mui/material/TextField';

// Wrapper component for TextField with default multiline and rows settings
const TextArea: React.FC<React.ComponentProps<typeof TextField>> = (props) => {
  return <TextField {...props} multiline rows={4} />;
};

export default TextArea;