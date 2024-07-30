import styled from '@emotion/styled';
import { Button } from '@mui/material';

const ButtonGray = styled(Button)(() => ({
    backgroundColor: '#E6E6E6',
    color: '#333333',
    fontSize: '14px',
    padding: '5px 0 5px 0',
    '&:hover': {
        backgroundColor: '#D6D6D6'
    }
}));

const ButtonGrayContained = ({...props}) => {
    return <ButtonGray variant='contained' {...props} />;
};

export default ButtonGrayContained;