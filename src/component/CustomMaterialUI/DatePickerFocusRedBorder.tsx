import styled from '@emotion/styled';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DateFieldFocusRedBorder = styled(DatePicker)(() => ({
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
    '& .MuiInputBase-input': {
        padding: '4px 8px 4px 8px', // Set padding for the input element
        width: '153px'
    }
}));

export default DateFieldFocusRedBorder;