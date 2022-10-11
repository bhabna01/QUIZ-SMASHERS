import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg header">
  <div class="container-fluid">
  <h2>QuizSmashers</h2>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/statistics">Statistics</Link>
        </li>
        <li class="nav-item">
        <Link to="/blog">Blog</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    );
};

export default Header;
