import React from 'react';
import ToggleMenu from './utils/ToggleMenu';
const Header = ({ toggle, setToggle }) => {
    return (
        <header>
            <a className='logo' href='/'>
                <img src='/images/Logo.svg' className='logo' alt='logo' />
            </a>
            {!toggle && <ToggleMenu toggle={toggle} setToggle={setToggle} />}
        </header>
    );
};

export default Header;
