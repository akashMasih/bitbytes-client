import React from 'react'
import Swiper from './Swiper'
import './testimonials.css'
import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.jpg'
import TestimonialsCard from './TestimonialsCard'
import Slider from './Swiper'
function Testimonials() {


    return (
        <section id="testimonials">
            <h5>Reviw from Clients</h5>
            <h2>Testimonials</h2>
            <div className="container testimonials__container">
                <Slider />

            </div>

        </section>
    )
}

export default Testimonials