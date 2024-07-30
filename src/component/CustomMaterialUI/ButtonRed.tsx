import styled from '@emotion/styled';
import { Button } from '@mui/material';

const ButtonRed = styled(Button)(() => ({
    backgroundColor: '#D9534F',
    fontSize: '14px',
    '&:hover': {
        backgroundColor: '#C9302C'
    }
}));

const ButtonRedContained = ({...props}) => {
    return <ButtonRed variant='contained' {...props} />;
};

export default ButtonRedContained;