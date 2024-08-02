// src/pages/auth/Singup.tsx
import { useState } from 'react';
import { signUp } from 'aws-amplify/auth';
import { uploadData } from 'aws-amplify/storage';
import { 
    Badge,
    Box,
    Divider,
    FormControlLabel,
    IconButton,
    Radio,
    RadioGroup,
    Typography
} from '@mui/material';
import {
    AvatarShadow,
    ButtonGray,
    ButtonRed,
    DatePickerFocusRedBorder,
    TextFieldFocusRedBorderSmall
} from '../../component/CustomMaterialUI';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/ko';
import { Formik, Form, Field, FormikHelpers, FieldProps } from 'formik';
import { toast } from 'react-toastify';
import { FaPencilAlt } from 'react-icons/fa';
import * as Yup from 'yup';
import dayjs, { Dayjs } from 'dayjs';
import uuid from 'react-native-uuid';
import '../../amplifyconfigure';

type TSignUpFormData = {
    userid: string;
    password: string;
    retype_password: string;
    email: string;
    username: string;
    nickname: string;
    homepage?: string;
    blogpage?: string;
    birthday?: Dayjs;
    mailing: string;
    memo: string;
    profileimage: File | null;
};

declare module 'yup' {
    interface ObjectSchema<
        TIn extends Yup.Maybe<Yup.AnyObject> = Yup.AnyObject, 
        TContext = Yup.AnyObject, 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        TDefault = any, 
        TFlags extends Yup.Flags = '', 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        T = any> {
        dayjs(message: string): ObjectSchema<TIn, TContext, TDefault, TFlags, T>;
    }
}

export default function Signup() {
    const [file, setFile] = useState<File|undefined>();
    const [avatarImage, setAvatarImage] = useState<string|null>(null);
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFile(file);
            const imageUrl = URL.createObjectURL(file);
            setAvatarImage(imageUrl);

            // Clean up the object URL to avoid memory leaks
            return () => URL.revokeObjectURL(imageUrl);
        }
    };

    const gridsize = [5, 7, 6, 6];

    Yup.addMethod(Yup.object, 'dayjs', function method(message) {
        return this.test('dayjs', message, function validate(value){
            if (!value) {
                return true;
            }
            if (typeof value === 'object') {
                return true;
            } else {
                return false;
            }
        });
    });

    const validationSchema = Yup.object({
        userid: Yup.string().required().label('User ID'),
        password: Yup.string().required().min(8).label('Password'),
        retype_password: Yup.string().required()
            .oneOf([Yup.ref('password'),''], 'Passwords must match'),
        email: Yup.string().required().email().label('Email'),
        username: Yup.string().required().label('User Name'),
        nickname: Yup.string().required().label('Nickname'),
        homepage: Yup.string().url().notRequired().label('Homepage'),
        blogpage: Yup.string().url().notRequired().label('Blog page'),
        birthday: Yup.object().dayjs('Birthday is invalid').notRequired(),
        mailing: Yup.string().notRequired().label('Subscribe Mailing'),
        memo: Yup.string().notRequired().label('Receive Memo')
    });

    const initialValues: TSignUpFormData = {
        userid: '',
        password: '',
        retype_password: '',
        email: '',
        username: '',
        nickname: '',
        homepage: '',
        blogpage: '',
        birthday: undefined,
        mailing: '',
        memo: '',
        profileimage: null
    };

    const handleSubmit = async (
        values: TSignUpFormData,
        { setSubmitting }: FormikHelpers<TSignUpFormData>
    ) => {
        validationSchema
            .validate(values, {abortEarly: false})
            .then(async () => {
                const result = await step01();
                const { isSignUpComplete, userId, nextStep } = await step02(values, result?.path);
                // console.log(isSignUpComplete, userId, nextStep);
                // // if (userId) {
                // //     await step02(userId, data);
                // //     await step03();
                // // }
                // setSubmitting(false);
            })
            .catch((err) => {
                if (err.inner) {
                    err.inner.forEach((error: Yup.ValidationError) => {
                        if (error.path) {
                            toast.error(error.message);
                        }
                    });
                } else {
                    toast.error(err.message);
                }
                setSubmitting(false);
            });
    };

    // Save profile image using amplify storage
    const step01 = async () => {
        if (file) {
            const id = uuid.v4().toString();
            return await uploadData({ 
                path: `public/${id}`, 
                data: file, 
            }).result;
        }
        return null;
    };

    // Create a cognito ID using amplify auth
    const step02 = async(data: TSignUpFormData, profilePath: string | undefined) => {
        return await signUp({
            username: data.email,
            password: data.password,
            options: {
                userAttributes: {
                    name: data.username,
                    birthdate: data.birthday?.format('YYYY-MM-DD'),
                    email: data.email,
                    nickname: data.nickname,
                    picture: profilePath ?? ''
                }
            }
        });
    };

    return (
        <Box sx={{width: '100%'}}>
            <Typography variant='h5' mt={2} mb={1}>
                Sign Up
            </Typography>
            <Divider />
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}>
                {({values, setFieldValue, isSubmitting}) => (
                    <Form>
                        <Grid2 container spacing={2} mt={1}>
                            <Grid2 container xs={gridsize[1]} spacing={2}>
                                <Grid2 xs={12} container alignItems='center'>
                                    <Grid2 xs={gridsize[2]} sx={{ alignContent: 'center', textAlign: 'right' }}>
                                        User ID
                                    </Grid2>
                                    <Grid2 xs={gridsize[3]}>
                                        <Field name='userid'>
                                            {({field}: FieldProps<TSignUpFormData>) => (
                                                <TextFieldFocusRedBorderSmall {...field} autoFocus />
                                            )}
                                        </Field>
                                    </Grid2>
                                </Grid2>
                                <Grid2 xs={12} container alignItems='center'>
                                    <Grid2 xs={gridsize[2]} sx={{ alignContent: 'center', textAlign: 'right' }}>
                                        Password
                                    </Grid2>
                                    <Grid2 xs={gridsize[3]}>
                                        <Field name='password' >
                                            {({field}: FieldProps<TSignUpFormData>) => (
                                                <TextFieldFocusRedBorderSmall {...field} type='password'/>
                                            )}
                                        </Field>
                                    </Grid2>
                                </Grid2>
                                <Grid2 xs={12} container alignItems='center'>
                                    <Grid2 xs={gridsize[2]} sx={{ alignContent: 'center', textAlign: 'right' }}>
                                        Retype Password
                                    </Grid2>
                                    <Grid2 xs={gridsize[3]}>
                                        <Field name='retype_password' >
                                            {({field}: FieldProps<TSignUpFormData>) => (
                                                <TextFieldFocusRedBorderSmall {...field} type='password' />
                                            )}
                                        </Field>
                                    </Grid2>
                                </Grid2>
                                <Grid2 xs={12} container alignItems='center'>
                                    <Grid2 xs={gridsize[2]} sx={{ alignContent: 'center', textAlign: 'right' }}>
                                        Email
                                    </Grid2>
                                    <Grid2 xs={gridsize[3]}>
                                        <Field name='email' >
                                            {({field}: FieldProps<TSignUpFormData>) => (
                                                <TextFieldFocusRedBorderSmall {...field} type='email' />
                                            )}
                                        </Field>
                                    </Grid2>
                                </Grid2>
                                <Grid2 xs={12} container alignItems='center'>
                                    <Grid2 xs={gridsize[2]} sx={{ alignContent: 'center', textAlign: 'right' }}>
                                        User Name
                                    </Grid2>
                                    <Grid2 xs={gridsize[2]}>
                                        <Field name='username' >
                                            {({field}: FieldProps<TSignUpFormData>) => (
                                                <TextFieldFocusRedBorderSmall {...field} name='username' />
                                            )}
                                        </Field>
                                    </Grid2>
                                </Grid2>
                                <Grid2 xs={12} container alignItems='center'>
                                    <Grid2 xs={gridsize[2]} sx={{ alignContent: 'center', textAlign: 'right' }}>
                                        Nickname
                                    </Grid2>
                                    <Grid2 xs={gridsize[2]}>
                                        <Field name='nickname' >
                                            {({field}: FieldProps<TSignUpFormData>) => (
                                                <TextFieldFocusRedBorderSmall {...field} />
                                            )}
                                        </Field>
                                    </Grid2>
                                </Grid2>
                                <Grid2 xs={12} container alignItems='center'>
                                    <Grid2 xs={gridsize[2]} sx={{ alignContent: 'center', textAlign: 'right' }}>
                                        Homepage
                                    </Grid2>
                                    <Grid2 xs={gridsize[2]}>
                                        <Field name='homepage' >
                                            {({field}: FieldProps<TSignUpFormData>) => (
                                                <TextFieldFocusRedBorderSmall {...field} />
                                            )}
                                        </Field>
                                    </Grid2>
                                </Grid2>
                                <Grid2 xs={12} container alignItems='center'>
                                    <Grid2 xs={gridsize[2]} sx={{ alignContent: 'center', textAlign: 'right' }}>
                                        Blog page
                                    </Grid2>
                                    <Grid2 xs={gridsize[2]}>
                                        <Field name='blogpage' >
                                            {({field}: FieldProps<TSignUpFormData>) => (
                                                <TextFieldFocusRedBorderSmall {...field} />
                                            )}
                                        </Field>
                                    </Grid2>
                                </Grid2>
                                <Grid2 xs={12} container alignItems='center'>
                                    <Grid2 xs={gridsize[2]} sx={{ alignContent: 'center', textAlign: 'right' }}>
                                        Birthday
                                    </Grid2>
                                    <Grid2 xs={gridsize[2]}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ko'>
                                            <Field name='birthday' >
                                                {({field}: FieldProps<TSignUpFormData>) => (
                                                    <DatePickerFocusRedBorder name={field.name} onChange={(newValue) => {
                                                        setFieldValue('birthday', newValue ? dayjs(newValue) : undefined);
                                                    }} value={values?.birthday} />
                                                )}
                                            </Field>
                                        </LocalizationProvider>                                
                                    </Grid2>
                                </Grid2>
                                <Grid2 xs={12} container alignItems='center' paddingY='0' marginY='-7px'>
                                    <Grid2 xs={gridsize[2]} sx={{ alignContent: 'center', textAlign: 'right' }}>
                                        Subscribe Mailing
                                    </Grid2>
                                    <Grid2 xs={gridsize[2]}>
                                        <RadioGroup row>
                                            <Field name='birthday' >
                                                {({field}: FieldProps<TSignUpFormData>) => (
                                                    <FormControlLabel name='mailing' value='Yes' control={<Radio />} label='Yes' checked/>
                                                )}
                                            </Field>
                                            <Field name='birthday' >
                                                {({field}: FieldProps<TSignUpFormData>) => (
                                                    <FormControlLabel name='mailing' value='No' control={<Radio />} label='No' />
                                                )}
                                            </Field>
                                        </RadioGroup>
                                    </Grid2>
                                </Grid2>
                                <Grid2 xs={12} container alignItems='center' paddingY='0' marginTop='-7px'>
                                    <Grid2 xs={gridsize[2]} sx={{ alignContent: 'center', textAlign: 'right' }}>
                                        Receive Memo
                                    </Grid2>
                                    <Grid2 xs={gridsize[2]}>
                                        <RadioGroup row>
                                            <FormControlLabel name='memo' value='Yes' control={<Radio />} label='Yes' checked/>
                                            <FormControlLabel name='memo' value='friends' control={<Radio />} label='Friends only' />
                                            <FormControlLabel name='memo' value='No' control={<Radio />} label='No' />
                                        </RadioGroup>
                                    </Grid2>
                                </Grid2>
                            </Grid2>
                            <Grid2 xs={gridsize[0]} textAlign="left" paddingLeft="80px">
                                <Badge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                    badgeContent={
                                        <IconButton component="label">
                                            <AvatarShadow id='editProfileImageButton'>
                                                <FaPencilAlt style={{ fontSize: '15px'}}/>
                                                <Field name='profileimage'>
                                                    {({field}: FieldProps<TSignUpFormData>) => (
                                                        <input
                                                            name={field.name}
                                                            accept="image/*"
                                                            type="file"
                                                            style={{ display: 'none' }}
                                                            onChange={handleImageChange}
                                                        />
                                                    )}
                                                </Field>
                                            </AvatarShadow>
                                        </IconButton>
                                    }>
                                    <AvatarShadow 
                                        src = {avatarImage || ''}
                                        sx={{
                                            width: '200px',
                                            height: '200px',
                                            border: '4px solid #FFFFFF'
                                        }}>
                                    </AvatarShadow>
                                </Badge>
                            </Grid2>
                        </Grid2>
                        <Divider sx={{marginY: '10px'}}/>
                        <ButtonGray onClick={null} sx={{marginRight: '10px'}}>Cancel</ButtonGray>
                        <ButtonRed type="submit" disabled={isSubmitting}>Sign In</ButtonRed>
                    </Form>
                )}
            </Formik>                
        </Box>
    );
}
