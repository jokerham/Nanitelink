import logo from 'logo.svg';
import 'amplifyconfigure';
import { fetchUserAttributes, FetchUserAttributesOutput, signOut } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';
import { Hub } from 'aws-amplify/utils';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<FetchUserAttributesOutput|undefined>(undefined);

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

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header>
      <nav className='NL_admin_nav'>
        <div className='NL_container'>
          <span className="NL_admin_nav_logo">
            <img src={logo} className="App-logo NL_icon" alt="logo" width="33" height="40" />
            Nanitelink Admin
          </span>
          <div className="NL_admin_nav_right">
            <button className="NL_buttonLink NL_admin_nav_link" >{user?.name}</button>
            <button className="NL_buttonLink NL_admin_nav_link" onClick={handleSignOut}>Sign Out</button>
          </div>
        </div>
      </nav>
      <div className="NL_container">
        <div className='NL_admin_divider' />
      </div>
    </header>
  );
};

export default Header;