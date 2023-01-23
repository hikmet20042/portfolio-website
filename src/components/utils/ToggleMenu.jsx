export default function ToggleMenu({ toggle, setToggle }) {
    return (
        <div className={`right-menu `} onClick={() => setToggle(!toggle)}>
            {toggle ? (
                <img
                    src='/images/exit.svg'
                    alt='exit icon'
                    className='hamburger'
                />
            ) : (
                <img
                    src='/images/hamburger.svg'
                    alt='hamburger menu'
                    className='hamburger'
                />
            )}
        </div>
    );
}
