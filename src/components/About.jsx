import React from 'react';
import { motion } from 'framer-motion';
const About = () => {
    return (
        <motion.section id='about' className='about'>
            <div className='header'>
                <h1>About me</h1>
                <hr className='subline' />
            </div>
            <div className='body'>
                <div className='left'>
                    <p>
                        Hello! My name is Hikmet. I enjoy creating websites for
                        real life using. My interest in web development started
                        back in 2020 when I was 15.
                    </p>
                </div>
                <div className='right'>
                    <h1>My Skills</h1>
                    <ul className='tools'>
                        <li className='tool'>
                            <div className='name'>HTML</div>
                            <img
                                draggable='false'
                                src='/images/html-5.svg'
                                alt=''
                            />
                        </li>
                        <li className='tool'>
                            <div className='name'>CSS/SCSS</div>
                            <img
                                draggable='false'
                                src='/images/css-3.svg'
                                alt=''
                            />
                        </li>
                        <li className='tool'>
                            <div className='name'>JavaScript (ES6+)</div>
                            <img
                                draggable='false'
                                src='/images/javascript.svg'
                                alt=''
                            />
                        </li>
                        <li className='tool'>
                            <div className='name'>React JS</div>
                            <img
                                draggable='false'
                                src='/images/react.svg'
                                alt=''
                            />
                        </li>
                        <li className='tool'>
                            <div className='name'>Node JS</div>
                            <img
                                draggable='false'
                                src='/images/node-js.svg'
                                alt=''
                            />
                        </li>
                        <li className='tool'>
                            <div className='name'>Tailwind CSS</div>
                            <img
                                draggable='false'
                                src='/images/tailwind.svg'
                                alt=''
                            />
                        </li>
                        <li className='tool'>
                            <div className='name'>SASS</div>
                            <img
                                draggable='false'
                                src='/images/sass.svg'
                                alt=''
                            />
                        </li>
                        <li className='tool'>
                            <div className='name'>NPM</div>
                            <img
                                draggable='false'
                                src='/images/npm.svg'
                                alt=''
                            />
                        </li>
                        <li className='tool'>
                            <div className='name'>GIT</div>
                            <img
                                draggable='false'
                                src='/images/git.svg'
                                alt=''
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
