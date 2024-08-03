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
} from 'component/CustomMaterialUI';
import { Formik, Form, Field, FieldProps, FormikHelpers } from 'formik';
import { toast } from 'react-toastify';
import { signIn } from 'aws-amplify/auth';
import 'amplifyconfigure';
import ConfirmSignUpDialog from 'component/dialog/ConfirmSignUpDialog';
import { useState } from 'react';

type TSignInFormData = {
    username: string,
    password: string
};

export default function LoginDialog(props: {open: boolean, handleClose: () => void}) {
  const navigate = useNavigate();
  const [openConfirmSignUpDialog, setOpenConfirmSignUpDialog] = useState(false);
  const [username, setUsername] = useState('');

  const initialValues: TSignInFormData = {
    username: '',
    password: ''
  };

  const handleSubmit = async(
    values: TSignInFormData,
    { setSubmitting }: FormikHelpers<TSignInFormData>
  ) => {
    try {
      const { nextStep } = await signIn({
        username: values.username,
        password: values.password
      });

      switch(nextStep.signInStep) {
      case 'CONFIRM_SIGN_UP':
        setUsername(values.username);
        setOpenConfirmSignUpDialog(true);
        break;
      case 'DONE':
        props.handleClose();
      }
    } catch(err) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
    }
    setSubmitting(false);
  };

  const handleClickSignIn = () => {
    props.handleClose();
    navigate('/signup');
  };

  const handleCloseSignUpDialog = () => {
    setOpenConfirmSignUpDialog(false);
    navigate('/');
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
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({isSubmitting}) => (
          <Form>
            <DialogContent dividers>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Field name='username'>
                    {({field}: FieldProps<TSignInFormData>) => (
                      <TextFieldFocusRedBorder
                        {...field}
                        autoFocus
                        required
                        fullWidth
                        margin="dense"
                        id="username"
                        label="Username"
                        variant="outlined"
                        size="small"/>
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field name='password'>
                    {({field}: FieldProps<TSignInFormData>) => (
                      <TextFieldFocusRedBorder
                        {...field}
                        required
                        fullWidth
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        size="small"/>
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <ButtonRed
                    type='submit'
                    disabled={isSubmitting}
                    fullWidth                                        
                    sx={{
                      marginTop: '5px'
                    }}>
                    <FaSignInAlt className="NL_icon" />
                                        Sign up
                  </ButtonRed>
                </Grid>
              </Grid>
            </DialogContent>
          </Form>
        )}                    
      </Formik>
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

      <ConfirmSignUpDialog
        open={openConfirmSignUpDialog}
        handleClose={handleCloseSignUpDialog}
        username={username} />
    </DialogWidth300>
  );
}