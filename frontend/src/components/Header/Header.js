import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">ARGENTBANK</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
