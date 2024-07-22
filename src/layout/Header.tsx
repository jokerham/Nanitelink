// src/layout/Header.tsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Popover } from '@mui/material';
import { FaSearch, FaSignInAlt } from "react-icons/fa";
import useNavigateWithParams from '../function/useNavigateWithParama';
import LoginDialog from '../component/LoginDialog';
import logo from '../logo.svg';
import { TextFieldFocusRedBorder } from '../component/CustomMaterialUI';

const Header: React.FC = () => {
  const navigateWithParams = useNavigateWithParams();
  const [open, setOpen] = useState(false);
  const [openPopup, setOpenPopup] = useState(false)
  const handleClick = () => { setOpen(true); }
  const handleClose = () => { setOpen(false); }
  const handleOnSearchClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenPopup(true);
  }
  const handleCLosePopup = () => {
    setAnchorEl(null);
    setOpenPopup(false);
  }
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const inputElement = event.target as HTMLInputElement;
      navigateWithParams('/search', { q: inputElement.value });
    }
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
              onClose={handleCLosePopup}
              sx={{
                marginTop: '15px'
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
            <button className="NL_buttonLink NL_nav_signin_link" onClick={handleClick}>
              <FaSignInAlt className="NL_icon" />
              Sign in
            </button>
            <LoginDialog open={open} handleClose={handleClose} />
          </div>
        </div>
      </nav>
    </header >
  );
};

export default Header;
