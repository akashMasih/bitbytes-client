import React from 'react'
import CTA from './CTA'
import Me from '../../assets/me.png'
import Social from './Social'

function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'am</h5>
                <h2>Akash Masih</h2>
                <h5>MEARN Stack Developer</h5>
                <CTA />
                <div className="me">
                    <img src={Me} alt="me" />
                </div>
                <a href="#contact" className="scroll__down">scroll down</a>
                <Social />
            </div>
        </header>
    )
}

export default Header