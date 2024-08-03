// src/layout/Header.tsx
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Popover } from '@mui/material';
import { FaSearch, FaSignInAlt } from 'react-icons/fa';
import useNavigateWithParams from 'function/useNavigateWithParams';
import LoginDialog from 'component/dialog/LoginDialog';
import logo from 'logo.svg';
import { AvatarShadow, TextFieldFocusRedBorder } from 'component/CustomMaterialUI';
import { fetchUserAttributes, FetchUserAttributesOutput } from 'aws-amplify/auth';
import 'amplifyconfigure';
import { getUrl } from 'aws-amplify/storage';
import { Hub } from 'aws-amplify/utils';
import ProfileMenu from 'layout/ProfileMenu';

const Header: React.FC = () => {
    const navigateWithParams = useNavigateWithParams();
    const [openSignIn, setOpenSignIn] = useState(false);
    const [openPopup, setOpenPopup] = useState(false);
    const [openProfileMenu, setOpenProfileMenu] = useState(false);
    const [user, setUser] = useState<FetchUserAttributesOutput|undefined>(undefined);
    const [profileImageUrl, setProfileImageUrl] = useState('');

    const getUser = async() => {
        const attributetmp = await fetchUserAttributes();
        setUser(attributetmp);
    };

    Hub.listen<'auth'>('auth', async ({ payload }) => {
        switch(payload.event) {
        case 'signedIn': {
            getUser();
            break;
        }
        default:
            setUser(undefined);
            break;
        }
    });

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        const fetchProfileImageUrl = async() => {
            if (user && user.picture) {
                const url = await getUrl({path: user.picture});
                if (url) {
                    setProfileImageUrl(url.url.toString());
                }
            }
        };
        fetchProfileImageUrl();
    }, [user]);

    const handleClickSignIn = () => { setOpenSignIn(true); };
    const handleCloseSignIn = () => { setOpenSignIn(false); };
    const handleClickProfileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {     
        setAnchorEl(event.currentTarget);
        setOpenProfileMenu(true); 
    };
    const handleCloseProfileMenu = () => { 
        setAnchorEl(null);
        setOpenProfileMenu(false); 
    };
    const handleOnSearchClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setOpenPopup(true);
    };
    const handleCLoseSearchPopover = () => {
        setAnchorEl(null);
        setOpenPopup(false);
    };
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const inputElement = event.target as HTMLInputElement;
            navigateWithParams('/search', { q: inputElement.value });
        }
    };

    const stringToColor = (string: string) => {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
    };

    const stringAvatar = (name: string) => {
        return {
            sx: {
                bgcolor: stringToColor(name),
                width: '20px',
                height: '20px',
                marginRight: '5px',
                fontSize: '12px'
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    };

    return (
        <header>
            <nav className='NL_nav'>
                <div className="NL_container">
                    <span className="NL_nav_logo">
                        <img src={logo} className="App-logo NL_icon" alt="logo" width="23" height="30" />
                        Nanitelink
                    </span>
                    <div className="NL_nav_menu">
                        <div className="NL_nav_menu_item">
                            <NavLink to="/">Home</NavLink>
                        </div>
                        <div className="NL_nav_menu_item">
                            <NavLink to="/board">Board</NavLink>
                        </div>
                    </div>
                    <div className="NL_nav_signin">
                        <button className="NL_buttonLink NL_nav_signin_link" onClick={handleOnSearchClick}>
                            <FaSearch className="NL_icon" />
                        </button>
                        <Popover
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={openPopup}
                            onClose={handleCLoseSearchPopover}
                            sx={{
                                marginTop: '13px'
                            }}
                        >
                            <Box sx={{
                                backgroundColor: '#222222',
                                padding: '5px'
                            }}>
                                <TextFieldFocusRedBorder
                                    placeholder="Search"
                                    variant="outlined"
                                    size="small"
                                    onKeyDown={handleSearch}
                                    sx={{
                                        backgroundColor: '#FFFFFF',
                                        borderRadius: '5px'
                                    }} />
                            </Box>
                        </Popover>
                        { user === undefined && (
                            <>
                                <button className="NL_buttonLink NL_nav_signin_link" onClick={handleClickSignIn}>
                                    <FaSignInAlt className="NL_icon" />
                                    Sign in
                                </button>
                                <LoginDialog open={openSignIn} handleClose={handleCloseSignIn} />
                            </>
                        )}
                        { user !== undefined && (
                            <>
                                <button className="NL_buttonLink NL_nav_signin_link" onClick={handleClickProfileMenu}>
                                    <AvatarShadow alt={user.name} src={ profileImageUrl } {...stringAvatar(user.name ?? '')} />
                                    { user.name }
                                </button>
                                <Popover
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={openProfileMenu}
                                    onClose={handleCloseProfileMenu}
                                    sx={{
                                        marginTop: '10px',
                                    }}
                                >
                                    <ProfileMenu closeHandler={handleCloseProfileMenu} />
                                </Popover>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </header >
    );
};

export default Header;
