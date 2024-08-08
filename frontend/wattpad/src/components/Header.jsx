import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">Wattpad</Link>
        <nav className="nav">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/stories">Stories</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/write">Write</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
