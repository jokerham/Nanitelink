import styled from '@emotion/styled';
import { Dialog } from '@mui/material';

const DialogWidth300 = styled(Dialog)(() => ({
    '& .MuiPaper-root': {
        width: '300px'
    }
}));

export default DialogWidth300;