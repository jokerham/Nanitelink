// src/components/LoginDialog/index.tsx
import { useNavigate  } from 'react-router-dom';
import {
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
} from '@mui/material';
import { IoCloseSharp } from 'react-icons/io5';
import { FaSignInAlt, FaUserPlus, FaQuestionCircle } from 'react-icons/fa';
import { 
    ButtonGraySmall,
    ButtonGroupGray,
    ButtonRed,
    DialogWidth300,
    TextFieldFocusRedBorder
} from '../CustomMaterialUI';

export default function LoginDialog(props: {open: boolean, handleClose: () => void}) {
    const navigate = useNavigate();
    const handleClickSignIn = () => {
        props.handleClose();
        navigate('/signup');
    };

    return (
        <DialogWidth300
            open={props.open}
            onClose={props.handleClose}
            fullWidth>
            <DialogTitle sx={{
                color: 'rgb(51,51,51)',
                fontFamily: 'Nanum Gothic',
                fontSize: '18px',
                fontWeight: '700'
            }}>
        Sign In
            </DialogTitle>
            <IconButton
                onClick={props.handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500]
                }}>
                <IoCloseSharp />
            </IconButton>
            <DialogContent dividers>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <TextFieldFocusRedBorder
                            autoFocus
                            required
                            fullWidth
                            margin="dense"
                            id="username"
                            name="username"
                            label="Username"
                            variant="outlined"
                            size="small"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldFocusRedBorder
                            required
                            fullWidth
                            margin="dense"
                            id="password"
                            name="password"
                            label="Password"
                            variant="outlined"
                            size="small"/>
                    </Grid>
                    <Grid item xs={12}>
                        <ButtonRed
                            fullWidth
                            sx={{
                                marginTop: '5px'
                            }}>
                            <FaSignInAlt className="NL_icon" />
              Sign in
                        </ButtonRed>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <ButtonGroupGray fullWidth>
                    <ButtonGraySmall onClick={handleClickSignIn}>
                        <FaUserPlus className='NL_icon'/>
            Sign In
                    </ButtonGraySmall>
                    <ButtonGraySmall>
                        <FaQuestionCircle className='NL_icon'/>
            Find Account Info
                    </ButtonGraySmall>
                </ButtonGroupGray>
            </DialogActions>
        </DialogWidth300>
    );
}