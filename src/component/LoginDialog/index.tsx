// src/components/LoginDialog/index.tsx
import {
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  DialogActions,
  Grid,
  TextField,
  Button,
  ButtonGroup
} from '@mui/material';
import { styled } from '@mui/system';
import { IoCloseSharp } from "react-icons/io5";
import { FaSignInAlt, FaUserPlus, FaQuestionCircle } from "react-icons/fa";

export default function LoginDialog(props: {open: boolean, handleClose: () => void}) {
  const LoginDialogWidth300 = styled(Dialog)(({ theme}) => ({
    '& .MuiPaper-root': {
      width: '300px'
    }
  }));
  
  const LoginTextField = styled(TextField)(({ theme }) => ({
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
        borderColor: 'blue', // Border color when hovered
      },
      '&.Mui-focused fieldset': {
        borderColor: '#D9534F;', // Border color when focused
      },
    },
  }));

  const LoginButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#D9534F',
    fontFamily: 'Nanum Gothic',
    fontSize: '14px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#C9302C'
    }
  }));

  const ActionButtonGroup = styled(ButtonGroup)(({ theme }) => ({
    margin: '5px 15px 5px 15px',
    '& .MuiButtonGroup-grouped': {
      borderColor: 'rgb(204,204,204)',
    },
  }));

  const ActionButton = styled(Button)(({ theme }) => ({
    color: 'rgb(51,51,51)',
    fontFamily: 'Nanum Gothic',
    fontSize: '11px',
    textTransform: 'none',
    padding: '5px 0 5px 0',
    '&:hover': {
      backgroundColor: '#E6E6E6'
    }
  })); 

  return (
    <LoginDialogWidth300
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
            <LoginTextField
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
            <LoginTextField
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
            <LoginButton
              fullWidth
              variant="contained"
              sx={{
                marginTop: "5px"
            }}>
              <FaSignInAlt className="NL_icon" />
              Sign in
            </LoginButton>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <ActionButtonGroup fullWidth>
          <ActionButton>
            <FaUserPlus className='NL_icon'/>
            Sign In
          </ActionButton>
          <ActionButton>
            <FaQuestionCircle className='NL_icon'/>
            Find Account Info
          </ActionButton>
        </ActionButtonGroup>
      </DialogActions>
    </LoginDialogWidth300>
  )
}