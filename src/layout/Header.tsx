// src/layout/Header.tsx
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Popover, MenuItem } from '@mui/material';
import { FaSearch, FaSignInAlt } from 'react-icons/fa';
import useNavigateWithParams from 'function/useNavigateWithParams';
import LoginDialog from 'component/dialog/LoginDialog';
import logo from 'logo.svg';
import { AvatarShadow, TextFieldFocusRedBorder } from 'component/CustomMaterialUI';
import { fetchAuthSession, fetchUserAttributes, FetchUserAttributesOutput, getCurrentUser } from 'aws-amplify/auth';
import { getUrl } from 'aws-amplify/storage';
import { Hub } from 'aws-amplify/utils';
import ProfileMenu from './ProfileMenu';
import { GraphqlQueryListMenu } from 'function/amplify/graphqlQueries';
import { MenuType } from 'API'; // Import the MenuType enum
import 'amplifyconfigure';
import MenuPopper from 'component/MenuPopper';

interface IMenu {
  __typename: 'Menu';
  id: string;
  name: string;
  parent?: string | null;
  menuType: MenuType;
  sortOrder?: number | null;
  url?: string | null;
  module: {
    __typename: 'Module';
    id: string;
    name: string;
  };
  subMenus?: IMenu[]; // Add subMenus property to store submenus
}

const Header: React.FC = () => {
  const navigateWithParams = useNavigateWithParams();
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [user, setUser] = useState<FetchUserAttributesOutput|undefined>(undefined);
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [routes, setRoutes] = useState<IMenu[]>([]); // State to hold fetched menu items

  const getUser = async() => {
    try {
      const session = await fetchAuthSession();
      if (session) {
        const user = await getCurrentUser();
        if (user) {
          const attributetmp = await fetchUserAttributes();
          setUser(attributetmp);
        }
      }
    } catch (error) {
      //console.log(error);
    }
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

  // Fetch all menus and submenus on component mount
  useEffect(() => {
    const fetchAllMenus = async () => {
      try {
        // Fetch the top-level menus
        const topLevelMenus = await GraphqlQueryListMenu({ id: '' });

        // Recursively fetch submenus for each top-level menu
        const fetchSubMenus = async (menu: IMenu): Promise<IMenu> => {
          const subMenus = await GraphqlQueryListMenu({ id: menu.id });
          const subMenusWithChildren = await Promise.all(
            subMenus.map((subMenu) => fetchSubMenus(subMenu)) // Fetch submenus for each submenu
          );
          return { ...menu, subMenus: subMenusWithChildren }; // Attach submenus to the parent menu
        };

        // Fetch all submenus for the top-level menus
        const menusWithSubMenus = await Promise.all(
          topLevelMenus.map((menu) => fetchSubMenus(menu))
        );

        setRoutes(menusWithSubMenus); // Store the complete menu structure in state
      } catch (error) {
        //console.error('Error fetching menus:', error);
      }
    };

    fetchAllMenus(); // Trigger the fetching process on mount
  }, []);

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
  // Handle popover open/close logic
  const handleSubmenuPopoverOpen = (event: React.MouseEvent<HTMLElement>, routeId: string) => {
    if (event.currentTarget) {
      setAnchorEl(event.currentTarget as HTMLButtonElement);
      setOpenSubMenu(routeId);
    }
  };
  const handleSubmenuPopoverClose = () => {
    setOpenSubMenu(null);
    setAnchorEl(null);
  };
  const handleSubMenuClick = () => {
    // Close submenu popover when a submenu link is clicked
    setOpenSubMenu(null);
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
          {/* Dynamic navigation menu */}
          <div className="NL_nav_menu">
            {routes.map((route) => (
              <div key={`${route.id}`}>
                <div 
                  className="NL_nav_menu_item"
                  onMouseEnter={(event) => handleSubmenuPopoverOpen(event, route.id)}
                //  onMouseLeave={handleSubmenuPopoverClose}
                >
                  <NavLink to={`/${route.url}`} >{route.name}</NavLink>
                </div>
                { route.subMenus && anchorEl && (route.subMenus?.length ?? 0 > 0) &&
                  <MenuPopper
                    targetRef={anchorEl}
                    open={openSubMenu !== null && openSubMenu === route.id}
                    onClose={handleSubmenuPopoverClose}
                  >
                    <Box sx={{
                      backgroundColor: '#222222',
                      // borderTopLeftRadius: 0,
                      // borderTopRightRadius: 0,
                      borderRadius: 0,
                      padding: '5px',
                      width: '170px',
                      zIndex: '9999'}}>
                      {
                        route.subMenus && route.subMenus?.length && route.subMenus.map((submenu) => (
                          <MenuItem key={submenu.id}>
                            <NavLink 
                              className='NL_nav_profile_menu' 
                              to={`/${submenu.url}`}
                              onClick={handleSubMenuClick}>
                              {submenu.name}
                            </NavLink>
                          </MenuItem>
                        ))
                      }
                    </Box>
                  </MenuPopper>
                }
              </div>
            ))};
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
