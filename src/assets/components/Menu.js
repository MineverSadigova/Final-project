import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoClose, IoMenu } from "react-icons/io5";
import '../css/global.scss/style.scss';


const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          Navigation Bar
        </Link>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/about" className="nav__link" onClick={closeMenuOnMobile}>
                HAQQIMIZDA
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/products" className="nav__link" onClick={closeMenuOnMobile}>
                MƏHSULLAR
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/lahiye"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                LAYİHƏLƏR
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/stability"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                DAYANIQLILIQ
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/contact"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                ƏLAQƏ
              </Link>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Menu