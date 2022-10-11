import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <h2>QuizSmashers</h2>
            </div>
             <div>
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/blog">Blog</Link>
            </div>
        </nav>
    );
};

export default Header;