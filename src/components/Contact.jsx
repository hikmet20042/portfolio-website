import React from 'react';

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className='header'>
                <h1>About me</h1>
                <hr className='subline' />
                <h2>Get In Touch</h2>
            </div>
            <div className='body'>
                <div className='left'>
                    <a
                        href='https://www.linkedin.com/in/hikmet-memmedli-38a591220/'
                        target='_blank'
                    >
                        <img src='/images/linkedin.svg' alt='' />
                    </a>
                    <a
                        href='https://www.github.com/hikmet20042'
                        target='_blank'
                    >
                        <img src='/images/github.svg' alt='' />
                    </a>
                    <a
                        href='mailto:hikmet.memmedli.2004@gmail.com'
                        target='_blank'
                    >
                        <img src='/images/email.svg' alt='' />
                    </a>
                </div>
                <div className='right'>
                    <form>
                        <div>
                            <label htmlFor='fullname'>Full Name</label>
                            <input type='text' name='fullname' id='fullname' />
                        </div>
                        <div>
                            <label htmlFor='email'>Email</label>
                            <input type='email' name='email' id='email' />
                        </div>
                        <div>
                            <label htmlFor='message'>Your Message</label>
                            <textarea name='message' id='message' />
                        </div>

                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
