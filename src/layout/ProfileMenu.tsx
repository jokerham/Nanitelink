import { Box, Divider, MenuItem } from '@mui/material';
import { fetchAuthSession, signOut } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function ProfileMenu(props: {closeHandler: () => void}) {
  const [isAdmin, setIsAdmin] = useState(false);

  const isAdminUser = async() => {
    const session = await fetchAuthSession();
    const groups = (await session).tokens?.idToken?.payload['cognito:groups'] as string[];
    const isAdmin = groups?.includes('Admin');
    setIsAdmin(isAdmin);
  };

  const onClickSignOut = async () => {
    await signOut();
    props.closeHandler();
  };

  useEffect(() => {
    isAdminUser();
  }, []);

  return (
    <Box sx={{
      backgroundColor: '#222222',
      padding: '5px',
      width: '170px'
    }}>
      <MenuItem>
        <NavLink className='NL_nav_profile_menu' to={'/my/account'} onClick={props.closeHandler} >My Account</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink className='NL_nav_profile_menu' to={'/my/posts'} onClick={props.closeHandler} >My Posts</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink className='NL_nav_profile_menu' to={'/my/friends'} onClick={props.closeHandler} >My Friends</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink className='NL_nav_profile_menu' to={'/my/friends'} onClick={props.closeHandler} >My Memo</NavLink>
      </MenuItem>
      <Divider sx={{backgroundColor: 'white'}}/>
      <MenuItem>
        <a className='NL_nav_profile_menu' onClick={onClickSignOut} >Sign out</a>
      </MenuItem>
      {isAdmin && (
        <MenuItem>
          <NavLink className='NL_nav_profile_menu' to={'/admin'} onClick={props.closeHandler} >Admin Page</NavLink>
        </MenuItem>
      )}
    </Box>
  );
}