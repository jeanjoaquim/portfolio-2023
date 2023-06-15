import React from 'react';

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    
    return(
        <nav className="nav-container">
            <img src='/menu.svg' alt='' className='btn-open-mobile-menu'/>
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="#home">home</a>
                </li>
                <li className="nav-item">
                    <a href="#projects">projects</a>
                </li>
                <li className="nav-item">
                    <a href="#about">about</a>
                </li>
                <li className="nav-item">
                    <a href="#contact">contact</a>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;