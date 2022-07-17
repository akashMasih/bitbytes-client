import React from 'react'
import './footer.css'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'


function Footer() {
    return (
        <footer>
            <h2 className='brand'>AKASH MASIH</h2>
            <div className="footer__link">
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#services">Services</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="footer__social">
                <a target='_blank' href="">
                    <FaFacebookF />
                </a>
                <a target='_blank' href="">
                    <FaLinkedinIn />
                </a>
                <a target='_blank' href="">
                    <FaTwitter />
                </a>
            </div>
        </footer>
    )
}

export default Footer