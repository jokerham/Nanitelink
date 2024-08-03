import logo from 'logo.svg';

const Header = () => {
  return (
    <header>
      <nav className='NL_admin_nav'>
        <div className="NL_admin_container">
          <span className="NL_admin_nav_logo">
            <img src={logo} className="App-logo NL_icon" alt="logo" width="23" height="30" />
            Nanitelink
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;