import React from 'react';

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    
    return(
        <nav>
            <img src='/menu.svg' alt='' className='md:hidden'/>
            <ul className='hidden md:flex'>
                <li>
                    <a href='' className='capitalize w-32 h-16 flex items-center justify-center 
                    transition duration-300 ease-in-out hover:bg-slate-100'>
                        home
                    </a>
                </li>
                <li>
                    <a href='' className='capitalize w-32 h-16 flex items-center justify-center 
                    transition duration-300 ease-in-out hover:bg-slate-100'>projects</a>
                </li>
                <li>
                    <a href='' className='capitalize w-32 h-16 flex items-center justify-center 
                    transition duration-300 ease-in-out hover:bg-slate-100'>about</a>
                </li>
                <li>
                    <a href='' className='capitalize w-32 h-16 flex items-center justify-center 
                    transition duration-300 ease-in-out hover:bg-slate-100'>contact</a>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;