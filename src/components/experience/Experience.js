import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { SiJavascript, SiReact, SiBootstrap, SiMaterialui, SiExpress, SiMongodb, SiSpring, SiMysql } from 'react-icons/si'
import { FaNodeJs, FaPhp } from 'react-icons/fa'
import './experience.css'

function Experience() {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Devlopment</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <AiFillHtml5 />
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                            <DiCss3 />
                            <h4>CSS</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                            <SiJavascript />
                            <h4>JavaScript</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                            <SiReact />
                            <h4>React.js</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                            <SiBootstrap />
                            <h4>Bootstrap</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                            <SiMaterialui />
                            <h4>Material-UI</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                    </div>
                </div>
                <div className="experience__frontend">
                    <h3>Backend Devlopment</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <FaNodeJs />
                            <h4>Node.js</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                            <SiExpress />
                            <h4>Express.js</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                            <SiMongodb />
                            <h4>MongoDb</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                            <SiSpring />
                            <h4>Springboot</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience__details'>
                            <FaPhp />
                            <h4>PHP</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience__details'>
                            <SiMysql />
                            <h4>Mysql</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                    </div>
                </div>

            </div >

        </section >
    )
}

export default Experience