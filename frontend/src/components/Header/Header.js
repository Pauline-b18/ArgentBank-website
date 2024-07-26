import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        </Link>
        <div className="main-nav-right">
          <Link className="main-nav-item" to="/login">
            <FontAwesomeIcon icon={faCircleUser} className="fa-icon" />
            Sign In
          </Link>
          <Link className="main-nav-item" to="/user">
            Test Userpage
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
