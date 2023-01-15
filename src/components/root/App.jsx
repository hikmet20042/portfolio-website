import { useState } from 'react'

function App() {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <nav className={toggle && `show`}>
                <div className='nav__header'>
                    <HamburgerMenu toggle={toggle} setToggle={setToggle} />
                </div>
                <div className='nav__body'>
                    <a href='/about' className='nav__body-navigation'>
                        About
                    </a>
                    <a href='/projects' className='nav__body-navigation'>
                        Projects
                    </a>
                    <a href='/contact' className='nav__body-navigation'>
                        Contact
                    </a>
                </div>
                <div className='nav__footer'>
                    &copy; 2022 Hikmet Memmedli, Azerbaijan,
                </div>
            </nav>
            <header>
                <a className='logo' href='/'>
                    <img src='/Logo.svg' alt='logo' />
                </a>

                <HamburgerMenu toggle={toggle} setToggle={setToggle} />
            </header>
            <main>
                <img className='scroll-down' src='/scroll-down.svg' />
                <section className='welcome'>
                    <h1>Hi, I am Hikmet.</h1>
                    <h2>I am front-end developer.</h2>
                </section>
                <section className='about'></section>
            </main>
            <footer></footer>
        </>
    )
}
function HamburgerMenu({ toggle, setToggle }) {
    return (
        <div className={`right-menu `} onClick={() => setToggle(!toggle)}>
            <img
                src='/hamburger.png'
                alt='hamburger menu'
                className='hamburger'
            />
        </div>
    )
}

export default App
