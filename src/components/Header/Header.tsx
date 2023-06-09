import React from 'react';
import Navbar from '../Navbar/Navbar';

type HeaderProps = {
    
};

const Header:React.FC<HeaderProps> = () => {
    
    return(
        <header className='w-full fixed z-99 bg-white'>
            <div className='w-[95%] mx-auto flex items-center justify-between h-[60px]'>
                <img src='/favicon.png' alt='' className='w-9 h-9'/>
                <Navbar />
            </div>
        </header>
    )
}
export default Header;