/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useState } from 'react';

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenuClick = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <header className="header">
      <img src="images/icon-menu.svg" alt="menu button" onClick={handleMobileMenuClick} />
      <h1 className="header-brand">sneakers</h1>
      <nav className={showMobileMenu ? 'navbar navbar-active' : 'navbar'}>
        <ul className="nav-items">
          <img
            src="images/icon-close.svg"
            alt="close menu button"
            onClick={handleMobileMenuClick}
          />
          <li className="nav-item">
            <a href="#">Collections</a>
          </li>
          <li className="nav-item">
            <a href="#">Men</a>
          </li>
          <li className="nav-item">
            <a href="#">Women</a>
          </li>
          <li className="nav-item">
            <a href="#">About</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <img src="images/icon-cart.svg" alt="cart" />
      <img src="images/image-avatar.png" alt="avatar" />
    </header>
  );
}

export default Header;
