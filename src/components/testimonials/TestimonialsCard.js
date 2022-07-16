import React from 'react'

function TestimonialsCard({ img, title, message }) {
    return (
        <div className="testimonial__card">
            <div className="testimonial__card-img">
                <img src={img} alt="testimonial" />
            </div>
            <h3>{title}</h3>
            <small>
                {message}
            </small>
        </div>
    )
}

export default TestimonialsCard