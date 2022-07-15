import React from 'react'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'

function Social() {
    return (
        <div className="header__socials">
            <a href="http://linkdine.com" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
            </a>
            <a href="http://github.com" target="_blank" rel="noopener noreferrer">
                <BsGithub />
            </a>
            <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                <BsTwitter />
            </a>
        </div>
    )
}

export default Social