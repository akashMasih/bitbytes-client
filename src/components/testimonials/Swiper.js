
import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.jpg'
import TestimonialsCard from './TestimonialsCard'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";



// import required modules
import { EffectCreative, Pagination } from "swiper";
const data = [
    {
        img: Avatar1,
        title: 'Lorem ipsum dolor sit',
        message: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio natus culpa consequuntur? Minus ipsum eligendi deleniti culpa repellendus aperiam! Ipsum illum quas ratione natus, odio nemo fuga alias praesentium fugit.'
    },
    {
        img: Avatar2,
        title: 'Lorem ipsum dolor sit',
        message: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio natus culpa consequuntur? Minus ipsum eligendi deleniti culpa repellendus aperiam! Ipsum illum quas ratione natus, odio nemo fuga alias praesentium fugit.'
    },
    {
        img: Avatar3,
        title: 'Lorem ipsum dolor sit',
        message: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio natus culpa consequuntur? Minus ipsum eligendi deleniti culpa repellendus aperiam! Ipsum illum quas ratione natus, odio nemo fuga alias praesentium fugit.'
    },
    {
        img: Avatar4,
        title: 'Lorem ipsum dolor sit',
        message: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio natus culpa consequuntur? Minus ipsum eligendi deleniti culpa repellendus aperiam! Ipsum illum quas ratione natus, odio nemo fuga alias praesentium fugit.'
    }
]

export default function Slider() {
    return (
        <>
            <Swiper
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        origin: "left center",
                        translate: ["-5%", 0, -200],
                        rotate: [0, 100, 0],
                    },
                    next: {
                        origin: "right center",
                        translate: ["5%", 0, -200],
                        rotate: [0, -100, 0],
                    },
                }}
                modules={[EffectCreative, Pagination]}
                className="mySwiper6"
            >
                {
                    data.map((item, i) => (
                        <SwiperSlide key={i}>
                            <TestimonialsCard
                                img={item.img}
                                title={item.title}
                                message={item.message}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}
