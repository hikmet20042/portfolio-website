import { useEffect } from 'react';
import { useState } from 'react';

export default function ToggleMenu({ toggle, setToggle }) {
    const [icon, setIcon] = useState('/images/hamburger.svg');
    useEffect(() => {
        if (toggle) {
            setTimeout(() => {
                setIcon('/images/exit.svg');
            }, 200);
        } else {
            setTimeout(() => {
                setIcon('/images/hamburger.svg');
            }, 200);
        }
    }, [toggle]);
    return (
        <div className='right-menu' onClick={() => setToggle(!toggle)}>
            <img src={icon} alt='toggle icon' className='hamburger' />
        </div>
    );
}
