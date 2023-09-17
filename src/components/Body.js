import React from 'react';
import NavTabs from './NavTabs';
import './style.css'
import PortfolioContainer from './PortfolioContainer';


const Header = () => {
    const navTabStyle = {
        backgroundColor: '#40434e',
        color: '#c7ede4',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
    };
    return (
        <header>
            <h1> Jacob Norris Portfolio</h1>
            
        </header>
    );
};
export default Header;