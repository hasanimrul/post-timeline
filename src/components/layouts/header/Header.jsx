import React from 'react';
import TopNav from './Navbar/TopNav/TopNav';
import BottomNav from './Navbar/BottomNav/BottomNav';

const Header = () => {
    return (
        <header>
            <TopNav />
            <BottomNav />
        </header>
    );
};

export default Header;