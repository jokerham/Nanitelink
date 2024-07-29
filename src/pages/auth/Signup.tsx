// src/pages/auth/Singup.tsx
import { useState } from 'react';
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
import { FaPencilAlt } from 'react-icons/fa';

export default function Signup() {
    const [avatarImage, setAvatarImage] = useState<string|null>(null);
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setAvatarImage(imageUrl);

            // Clean up the object URL to avoid memory leaks
            return () => URL.revokeObjectURL(imageUrl);
        }
    };

    const gridsize = [5, 7, 6, 6];

    return (
        <Box sx={{width: '100%'}}>
            <Typography variant='h5' mt={2} mb={1}>
                Sign Up
            </Typography>
            <Divider />
            <Grid2 container spacing={2} mt={1}>
                <Grid2 container xs={gridsize[1]} spacing={2}>
                    <Grid2 xs={12} container alignItems="center">
                        <Grid2 xs={gridsize[2]} sx={{ alignContent: 'center', textAlign: 'right' }}>
                            User ID
                        </Grid2>
                        <Grid2 xs={gridsize[3]}>
                            <TextFieldFocusRedBorderSmall autoFocus/>
                        </Grid2>
                    </Grid2>
                    <Grid2 xs={12} container alignItems="center">
                        <Grid2 xs={gridsize[2]} sx={{ alignContent: 'center', textAlign: 'right' }}>
                            Password
                        </Grid2>
                        <Grid2 xs={gridsize[3]}>
                            <TextFieldFocusRedBorderSmall type='password'/>
                        </Grid2>
                    </Grid2>
                    <Grid2 xs={12} container alignItems="center">
                        <Grid2 xs={gridsize[2]} sx={{ alignContent: 'center', textAlign: 'right' }}>
                            Retype Password
                        </Grid2>
                        <Grid2 xs={gridsize[3]}>
                            <TextFieldFocusRedBorderSmall type='password'/>
                        </Grid2>
                    </Grid2>
                    <Grid2 xs={12} container alignItems="center">
                        <Grid2 xs={gridsize[2]} sx={{ alignContent: 'center', textAlign: 'right' }}>
                            Email
                        </Grid2>
                        <Grid2 xs={gridsize[3]}>
                            <TextFieldFocusRedBorderSmall type='email'/>
                        </Grid2>
                    </Grid2>
                    <Grid2 xs={12} container alignItems="center">
                        <Grid2 xs={gridsize[2]} sx={{ alignContent: 'center', textAlign: 'right' }}>
                            User Name
                        </Grid2>
                        <Grid2 xs={gridsize[2]}>
                            <TextFieldFocusRedBorderSmall/>
                        </Grid2>
                    </Grid2>
                    <Grid2 xs={12} container alignItems="center">
                        <Grid2 xs={gridsize[2]} sx={{ alignContent: 'center', textAlign: 'right' }}>
                            Nickname
                        </Grid2>
                        <Grid2 xs={gridsize[2]}>
                            <TextFieldFocusRedBorderSmall/>
                        </Grid2>
                    </Grid2>
                    <Grid2 xs={12} container alignItems="center">
                        <Grid2 xs={gridsize[2]} sx={{ alignContent: 'center', textAlign: 'right' }}>
                            Password recovery question
                        </Grid2>
                        <Grid2 xs={gridsize[2]}>
                            <TextFieldFocusRedBorderSmall/>
                        </Grid2>
                    </Grid2>
                    <Grid2 xs={12} container alignItems="center">
                        <Grid2 xs={gridsize[2]} sx={{ alignContent: 'center', textAlign: 'right' }}>
                            Homepage
                        </Grid2>
                        <Grid2 xs={gridsize[2]}>
                            <TextFieldFocusRedBorderSmall/>
                        </Grid2>
                    </Grid2>
                    <Grid2 xs={12} container alignItems="center">
                        <Grid2 xs={gridsize[2]} sx={{ alignContent: 'center', textAlign: 'right' }}>
                            Blog page
                        </Grid2>
                        <Grid2 xs={gridsize[2]}>
                            <TextFieldFocusRedBorderSmall/>
                        </Grid2>
                    </Grid2>
                    <Grid2 xs={12} container alignItems="center">
                        <Grid2 xs={gridsize[2]} sx={{ alignContent: 'center', textAlign: 'right' }}>
                            Birthday
                        </Grid2>
                        <Grid2 xs={gridsize[2]}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ko'>
                                <DatePickerFocusRedBorder/>
                            </LocalizationProvider>
                        </Grid2>
                    </Grid2>
                    <Grid2 xs={12} container alignItems="center" paddingY="0" marginY="-7px">
                        <Grid2 xs={gridsize[2]} sx={{ alignContent: 'center', textAlign: 'right' }}>
                            Subscribe Mailing
                        </Grid2>
                        <Grid2 xs={gridsize[2]}>
                            <RadioGroup row>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </Grid2>
                    </Grid2>
                    <Grid2 xs={12} container alignItems="center" paddingY="0" marginTop="-7px">
                        <Grid2 xs={gridsize[2]} sx={{ alignContent: 'center', textAlign: 'right' }}>
                            Receive Memo
                        </Grid2>
                        <Grid2 xs={gridsize[2]}>
                            <RadioGroup row>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="friends" control={<Radio />} label="Friends only" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
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
                                    <input
                                        accept="image/*"
                                        type="file"
                                        style={{ display: 'none' }}
                                        onChange={handleImageChange}
                                    />
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
            <ButtonGray sx={{marginRight: '10px'}}>Cancel</ButtonGray>
            <ButtonRed>Sign In</ButtonRed>
        </Box>
    );
}
