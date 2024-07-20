// src/layout/Header.tsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSignInAlt } from "react-icons/fa";
import LoginDialog from '../component/LoginDialog';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => { setOpen(true); }
  const handleClose = () => { setOpen(false); }
  
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
            <button className="NL_buttonLink NL_nav_signin_link" onClick={handleClick}>
              <FaSignInAlt className="NL_icon" />
              Sign in
            </button>
            <LoginDialog open={open} handleClose={handleClose}/>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
