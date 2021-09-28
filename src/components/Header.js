import headerLogo from '../images/header-logo.svg';
function Header() {
    return (
    <header className="header">
      <a href="/index.html" target="_self"><img className="header__logo" src={headerLogo} alt="Логотип" /></a>
    </header>   
    );
  }
  
  export default Header;