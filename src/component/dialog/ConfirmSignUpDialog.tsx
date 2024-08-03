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
import { FaSignInAlt } from 'react-icons/fa';
import {
    ButtonRed,
    DialogWidth300,
    TextFieldFocusRedBorder
} from '../CustomMaterialUI';
import { Formik, Form, Field, FieldProps, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { confirmSignUp } from 'aws-amplify/auth';
import { toast } from 'react-toastify';
import '../../amplifyconfigure';

type TSignUpVerificationFormData = {
    verification_code: string;
};

export default function ConfirmSignUpDialog(props: {open: boolean, handleClose: () => void, username: string}) {
    const navigate = useNavigate();

    const initialValues: TSignUpVerificationFormData = {
        verification_code: ''
    };

    const handleSubmit = async(
        values: TSignUpVerificationFormData,
        { setSubmitting }: FormikHelpers<TSignUpVerificationFormData>
    ) => {
        const { isSignUpComplete, nextStep } = await confirmSignUp({
            username: props.username,
            confirmationCode: values.verification_code
        });
        
        if (isSignUpComplete) {
            setSubmitting(false);
            props.handleClose();
            navigate('/');
        } else {
            toast.error(nextStep.signUpStep);
        }

        setSubmitting(false);
    };

    return (
        <DialogWidth300
            open={props.open}
            onClose={props.handleClose}
            fullWidth>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({isSubmitting}) => (
                    <Form>
                        <DialogTitle sx={{
                            color: 'rgb(51,51,51)',
                            fontFamily: 'Nanum Gothic',
                            fontSize: '18px',
                            fontWeight: '700'
                        }}>
                            Confirm Sign Up
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
                                    <Field name='verification_code'>
                                        {({field}: FieldProps<TSignUpVerificationFormData>) => (
                                            <TextFieldFocusRedBorder
                                                {...field}
                                                autoFocus
                                                required
                                                fullWidth
                                                margin="dense"
                                                id="verification_code"
                                                label="Verification Code"
                                                variant="outlined"
                                                size="small"/>
                                        )}
                                    </Field>
                                </Grid>
                                <Grid item xs={12}>
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <ButtonRed
                                type='submit'
                                disabled={isSubmitting}
                                sx={{
                                    marginTop: '5px'
                                }}>
                                <FaSignInAlt className="NL_icon" />
                                Submit
                            </ButtonRed>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
        </DialogWidth300>
    );
}