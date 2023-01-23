import React from 'react';

const Projects = () => {
    return (
        <section id='projects' className='projects'>
            <div className='header'>
                <h1>Projects</h1>
                <hr className='subline' />
            </div>
            <div className='body'>
                <div className='project'>
                    <div className='left'>
                        <img src='/images/project-1.jpg' alt='' />
                        <a
                            href='https://h-and-m-weather.netlify.app/'
                            target='_blank'
                        >
                            View Live
                        </a>
                        <div className='filter'></div>
                    </div>
                    <div className='right'>
                        <h1>H&M Weather</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, quae.
                        </p>

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
                        <img src='/images/project-2.jpg' alt='' />
                        <a href='https://gpt3-hm.netlify.app/' target='_blank'>
                            View Live
                        </a>
                        <div className='filter'></div>
                    </div>
                    <div className='right'>
                        <h1>GPT3</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, quae.
                        </p>

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
                        <img src='/images/project-3.jpg' alt='' />
                        <a href='https://gingerx.netlify.app/' target='_blank'>
                            View Live
                        </a>
                        <div className='filter'></div>
                    </div>
                    <div className='right'>
                        <h1>GingerX Bar</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, quae.
                        </p>

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
    );
};

export default Projects;
