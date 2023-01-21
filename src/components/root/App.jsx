import { useState } from 'react'
import { easeInOut, motion } from 'framer-motion'
function App() {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <nav className={toggle && `show`}>
                <div className='nav__header'>
                    <HamburgerMenu toggle={toggle} setToggle={setToggle} />
                </div>
                <div className='nav__body'>
                    <a
                        href='#about'
                        onClick={() => setToggle(!toggle)}
                        className='nav__body-navigation'
                    >
                        About
                    </a>
                    <a
                        href='#projects'
                        onClick={() => setToggle(!toggle)}
                        className='nav__body-navigation'
                    >
                        Projects
                    </a>
                    <a
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
            <header>
                <a className='logo' href='/'>
                    <img src='/Logo.svg' className='logo' alt='logo' />
                </a>
                <HamburgerMenu toggle={toggle} setToggle={setToggle} />
            </header>
            <main>
                <a href='#about'>
                    <motion.img
                        animate={{ y: [0, 10, 0, 20, 0, 10, 0] }}
                        transition={{
                            duration: 2,
                            ease: easeInOut,
                            repeat: Infinity,
                        }}
                        className='scroll-down'
                        src='/scroll-down.svg'
                    />
                </a>

                <motion.section
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, ease: easeInOut }}
                    id='welcome'
                    className='welcome'
                >
                    <h1>Hi, I am Hikmet.</h1>
                    <h2>I am front-end developer.</h2>
                </motion.section>
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    id='about'
                    className='about'
                >
                    <div className='header'>
                        <h1>About me</h1>
                        <hr className='subline' />
                    </div>
                    <div className='body'>
                        <div className='left'>
                            <p>
                                Hello! My name is Hikmet. I enjoy creating
                                websites for real life using. My interest in web
                                development started back in 2020 when I was 15.
                            </p>
                        </div>
                        <div className='right'>
                            <h1>My Skills</h1>
                            <ul className='tools'>
                                <li className='tool'>
                                    <div className='name'>HTML</div>
                                    <img
                                        draggable='false'
                                        src='/html-5.svg'
                                        alt=''
                                    />
                                </li>
                                <li className='tool'>
                                    <div className='name'>CSS/SCSS</div>
                                    <img
                                        draggable='false'
                                        src='/css-3.svg'
                                        alt=''
                                    />
                                </li>
                                <li className='tool'>
                                    <div className='name'>
                                        JavaScript (ES6+)
                                    </div>
                                    <img
                                        draggable='false'
                                        src='/javascript.svg'
                                        alt=''
                                    />
                                </li>
                                <li className='tool'>
                                    <div className='name'>React JS</div>
                                    <img
                                        draggable='false'
                                        src='/react.svg'
                                        alt=''
                                    />
                                </li>
                                <li className='tool'>
                                    <div className='name'>Node JS</div>
                                    <img
                                        draggable='false'
                                        src='/node-js.svg'
                                        alt=''
                                    />
                                </li>
                                <li className='tool'>
                                    <div className='name'>Tailwind CSS</div>
                                    <img
                                        draggable='false'
                                        src='/tailwind.svg'
                                        alt=''
                                    />
                                </li>
                                <li className='tool'>
                                    <div className='name'>SASS</div>
                                    <img
                                        draggable='false'
                                        src='/sass.svg'
                                        alt=''
                                    />
                                </li>
                                <li className='tool'>
                                    <div className='name'>NPM</div>
                                    <img
                                        draggable='false'
                                        src='/npm.svg'
                                        alt=''
                                    />
                                </li>
                                <li className='tool'>
                                    <div className='name'>GIT</div>
                                    <img
                                        draggable='false'
                                        src='/git.svg'
                                        alt=''
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.section>
                <section id='projects' className='projects'>
                    <div className='header'>
                        <h1>Projects</h1>
                        <hr className='subline' />
                    </div>
                    <div className='body'>
                        <div className='project'>
                            <div className='left'>
                                <img src='/project-1.jpg' alt='' />
                            </div>
                            <div className='right'>
                                <h1>H&M Weather</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, quae.
                                </p>
                                <a
                                    href='https://h-and-m-weather.netlify.app/'
                                    target='_blank'
                                >
                                    View Project
                                </a>
                                <a
                                    href='https://github.com/hikmet20042/Weather-H-M'
                                    target='_blank'
                                >
                                    Github Link
                                </a>
                            </div>
                        </div>
                        <div className='project'>
                            <div className='left'>
                                <img src='/project-2.jpg' alt='' />
                            </div>
                            <div className='right'>
                                <h1>GPT3</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, quae.
                                </p>
                                <a
                                    href='https://gpt3-hm.netlify.app/'
                                    target='_blank'
                                >
                                    View Project
                                </a>
                                <a
                                    href='https://github.com/hikmet20042/gpt3'
                                    target='_blank'
                                >
                                    Github Link
                                </a>
                            </div>
                        </div>
                        <div className='project'>
                            <div className='left'>
                                <img src='/project-3.jpg' alt='' />
                            </div>
                            <div className='right'>
                                <h1>GingerX Bar</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, quae.
                                </p>
                                <a
                                    href='https://gingerx.netlify.app/'
                                    target='_blank'
                                >
                                    View Project
                                </a>
                                <a
                                    href='https://github.com/hikmet20042/gingerx'
                                    target='_blank'
                                >
                                    Github Link
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer></footer>
        </>
    )
}
const hamburgerVariants = {
    open: {
        rotate: 90,
        transition: {
            duration: 0.5,
        },
    },
    closed: {
        rotate: 0,
        transition: {
            duration: 0.5,
        },
    },
}
function HamburgerMenu({ toggle, setToggle }) {
    return (
        <div className={`right-menu `} onClick={() => setToggle(!toggle)}>
            <img
                src='/hamburger.svg'
                alt='hamburger menu'
                className='hamburger'
            />
        </div>
    )
}

export default App
