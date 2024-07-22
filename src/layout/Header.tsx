// src/layout/Header.tsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSignInAlt, FaSearch } from 'react-icons/fa';
import LoginDialog from '../component/LoginDialog';
import { Box, Popover } from '@mui/material';
import { TextFieldFocusRedBorder } from '../component/CustomMaterialUI';
import useNavigateWithParams from '../function/useNavigateWithParams';

const Header: React.FC = () => {
    const navigateWithParams = useNavigateWithParams();
    const [openSignIn, setOpenSignIn] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const signInClick = () => { setOpenSignIn(true); };
    const signInClose = () => { setOpenSignIn(false); };
    const searchClick = (event: React.MouseEvent<HTMLElement>) => { setAnchorEl(event.currentTarget); setOpenSearch(true); };
    const searchClose = () => { setAnchorEl(null); setOpenSearch(false); };
    const searchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const inputElement = event.target as HTMLInputElement;
            navigateWithParams('/search', { q: inputElement.value });
        }
    };
  
    return (
        <header>
            <nav className='NL_nav'>
                <div className="NL_container">
                    <span className="NL_nav_logo">Nanitelink</span>
                    <div className="NL_nav_menu">
                        <div className="NL_nav_menu_item">
                            <NavLink to="/">Home</NavLink>
                        </div>
                        <div className="NL_nav_menu_item">
                            <NavLink to="/board">Board</NavLink>
                        </div>
                    </div>
                    <div className="NL_nav_signin">
                        <button className="NL_buttonLink NL_nav_signin_link" onClick={searchClick}>
                            <FaSearch className="NL_icon" />
                        </button>
                        <Popover
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right'
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            open={openSearch}
                            onClose={searchClose}>
                            <Box
                                sx={{
                                    paddingTop: '15px',
                                    backgroundColor: '#222222',
                                }}>
                                <TextFieldFocusRedBorder
                                    autoFocus
                                    placeholder='Search'
                                    size='small'
                                    onKeyDown={searchKeyDown}
                                    sx={{
                                        backgroundColor: '#FFFFFF',
                                        borderRadius: '5px',
                                        margin: '10px'
                                    }}/>
                            </Box>
                        </Popover>
                        <button className="NL_buttonLink NL_nav_signin_link" onClick={signInClick}>
                            <FaSignInAlt className="NL_icon" />
              Sign in
                        </button>
                        <LoginDialog open={openSignIn} handleClose={signInClose}/>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
