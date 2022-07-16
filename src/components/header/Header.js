import React from 'react'
import CTA from './CTA'
import Me from '../../assets/akash.png'
import Social from './Social'
import { FiChevronsRight } from 'react-icons/fi'
import './header.css'
import Scroll from '../../assets/scrollDown.gif'

function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'am</h5>
                <h2>Akash Masih</h2>
                <h5>MEARN Stack Developer</h5>
                <CTA />
                <Social />
                <div className="me">
                    <img src={Me} alt="me" />
                </div>
                <a href="#contact" className="scroll__down">
                    <img src={Scroll} alt="scroll" />
                    {/* scroll down
                    <FiChevronsRight className='icon' /> */}
                </a>
            </div>
        </header>
    )
}

export default Header