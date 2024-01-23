import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/" className="header-home"/>
            <img src="/images/Logo.png" />
            <h1>Hyunjun Angelo Jeon</h1>
        </header>
    );
};

export default Header;
