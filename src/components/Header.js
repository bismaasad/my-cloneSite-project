import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <header className="header">
      <div className="header-menu" onClick={toggleMenu}>
        {menuOpen ? (
          <span className="menu-close">×</span>
        ) : (
          <FaBars className="menu-icon" />
        )}
        <span className="menu">{menuOpen ? 'Close' : 'Menu'}</span>
      </div>
      <div className="header-logo">
        <img
          src="https://www.nmdp.org/-/media/project/nmdp/global/images/logos/nmdp_logo_tm_300x96.svg?h=33&iar=0&w=279&rev=3e13c88086fd4134b9c8588dd337bf15&hash=962753EC04F56EC53A91717E3F2DB963"
          alt="NMDP Logo"
          className="logo"
        />
      </div>
      <div className="header-search">
        <input type="text" placeholder="What are you looking for?" />
        <div className="Srch">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="header-buttons">
        <button
          className="give-button"
          onClick={() => handleNavigation('/donation')}
        >
          Give
          <i
            className="fa-solid fa-arrow-up-right-from-square"
            style={{ marginLeft: '8px' }}
          ></i>
        </button>
        <button
          className="join-button"
          onClick={() => handleNavigation('/join-header')}
        >
          Join
          <i
            className="fa-solid fa-arrow-up-right-from-square"
            style={{ marginLeft: '8px' }}
          ></i>
        </button>
      </div>
      {menuOpen && (
        <nav className="menu-list">
          <Link to="/patient-care" className="menu-item">
            Patient Care
          </Link>
          <Link to="/get-involved" className="menu-item">
            Get Involved
          </Link>
          <Link to="/what-we-do" className="menu-item">
            What We Do
          </Link>
          <Link to="/stories-and-impact" className="menu-item">
            Stories and Impact
          </Link>
          <div className="menu-footer">
            <a href="#" className="footer-link">
              NMDP Network
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
