import React from 'react'
import './about.css'
import Me from '../../assets/about.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { BsCodeSlash } from 'react-icons/bs'



function About() {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Me} alt="about" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ Years Working </small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>100+ world wide</small>
                        </article>
                        <article className='about__card'>
                            <BsCodeSlash className='about__icon' />
                            <h5>Projects</h5>
                            <small>30+ completed </small>
                        </article>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aspernatur commodi ad assumenda ipsam? Repellat suscipit facilis beatae non repudiandae nihil vero
                        aspernatur officia ipsum. Quaerat minus corrupti iste commodi odit.
                    </p>
                    <a href='#contact' className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section >
    )
}

export default About