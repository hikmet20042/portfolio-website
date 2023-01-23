import React from 'react';
import { easeInOut, motion } from 'framer-motion';
const ScrollDown = () => {
    return (
        <a href='#about'>
            <motion.img
                animate={{ y: [0, 10, 0, 20, 0, 10, 0] }}
                transition={{
                    duration: 2,
                    ease: easeInOut,
                    repeat: Infinity,
                }}
                className='scroll-down'
                src='/images/scroll-down.svg'
            />
        </a>
    );
};

export default ScrollDown;
