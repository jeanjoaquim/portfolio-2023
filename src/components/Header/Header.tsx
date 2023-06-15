import React from 'react';
import Navbar from '../Navbar/Navbar';

type HeaderProps = {
    
};

const Header:React.FC<HeaderProps> = () => {
    
    return(
        <header>
            <div className='header-container'>
                <img src='/favicon.png' alt='' className='logo'/>
                <Navbar />
            </div>
        </header>
    )
}
export default Header;