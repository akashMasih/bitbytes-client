import React from 'react'
import './contact.css'
import { GrMail } from 'react-icons/gr'
import { ImWhatsapp } from 'react-icons/im'

function Contact() {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__detail">
                    <div className="contact__deatil-card">
                        <GrMail className='conatct__icon' />
                        <h3>Email</h3>
                        <p>akashmasih155@gmail.com</p>
                        <a target='_blank' href="mailto:akashmasih155@gmail.com">send a message</a>
                    </div>
                    <div className="contact__deatil-card">
                        <ImWhatsapp className='conatct__icon' />
                        <h3>Whatsapp</h3>
                        <p>+9178888-46659</p>
                        <a target='_blank' href="https://api.whatsapp.com/send?phone=7888846659">Send Message</a>
                    </div>
                </div>
                <div className="contact__form">
                    <form >
                        <input type="text" placeholder='Your Full Name' name="name" />
                        <input type="email" placeholder='Your Email' name="email" />
                        <textarea name="message" rows="3" placeholder='Your Message' />
                        <input type="submit" value="Send Message" className='btn btn-primary' />
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact