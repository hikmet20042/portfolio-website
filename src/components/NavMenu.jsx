import React, { useEffect } from 'react';
import { useState } from 'react';
import ToggleMenu from './utils/ToggleMenu';
const NavMenu = ({ toggle, setToggle }) => {
    const [navClasses, setNavClasses] = useState('');
    useEffect(() => {
        if (toggle) {
            setNavClasses('show');
            setTimeout(() => {
                setNavClasses('show move');
            }, 100);
        } else {
            setNavClasses('show move-back');
            setTimeout(() => {
                setNavClasses('');
            }, 100);
        }
    }, [toggle]);

    return (
        <nav className={navClasses}>
            <div tabIndex='-1' className='nav__header'>
                <ToggleMenu toggle={toggle} setToggle={setToggle} />
            </div>
            <div tabIndex='-1' className='nav__body'>
                <a
                    tabIndex='-1'
                    href='#about'
                    onClick={() => setToggle(!toggle)}
                    className='nav__body-navigation'
                >
                    About
                </a>
                <a
                    tabIndex='-1'
                    href='#projects'
                    onClick={() => setToggle(!toggle)}
                    className='nav__body-navigation'
                >
                    Projects
                </a>
                <a
                    tabIndex='-1'
                    href='#contact'
                    onClick={() => setToggle(!toggle)}
                    className='nav__body-navigation'
                >
                    Contact
                </a>
            </div>
            <div className='nav__footer'>
                &copy; 2022 Hikmet Memmedli, Azerbaijan,
            </div>
        </nav>
    );
};

export default NavMenu;
