import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg header">
  <div className="container-fluid">
  <h2>QuizSmashers</h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/statistics">Statistics</Link>
        </li>
        <li className="nav-item">
        <Link to="/blog">Blog</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    );
};

export default Header;
