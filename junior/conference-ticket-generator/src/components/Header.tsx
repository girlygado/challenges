import logo from '../assets/icons/logo-full.svg';

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="header__logo-link">
        <img src={logo} alt="Coding Conf Logo" className="header__logo-image" />
      </a>
    </header>
  );
};

export default Header;
