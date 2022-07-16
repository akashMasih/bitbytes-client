import React from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { IoIosContact } from 'react-icons/io'
import './nav.css'
import { useState } from 'react'

function Nav() {
    const [activeNav, setActiveNAv] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNAv('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNAv('about')} className={activeNav === 'about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#experience" onClick={() => setActiveNAv('experience')} className={activeNav === 'experience' ? 'active' : ''}><BiBook /></a>
            <a href="#services" onClick={() => setActiveNAv('services')} className={activeNav === 'services' ? 'active' : ''}><RiServiceLine /></a>
            <a href="#contact" onClick={() => setActiveNAv('contact')} className={activeNav === 'contact' ? 'active' : ''}><BiMessageSquareDetail /></a>

        </nav>
    )
}

export default Nav