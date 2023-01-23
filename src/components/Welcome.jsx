import React from 'react';
import { easeInOut, motion } from 'framer-motion';
const Welcome = () => {
    return (
        <motion.section
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: easeInOut, delay: 1 }}
            id='welcome'
            className='welcome'
        >
            <h1>Hi, I am Hikmet Memmedli.</h1>
            <h2>I am front-end developer.</h2>
        </motion.section>
    );
};

export default Welcome;
