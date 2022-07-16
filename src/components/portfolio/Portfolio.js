import React from 'react'
import './portfolio.css'
import Portfolio1 from '../../assets/portfolio1.jpg'
import Portfolio2 from '../../assets/portfolio2.jpg'
import Portfolio3 from '../../assets/portfolio3.jpg'
import Portfolio4 from '../../assets/portfolio4.jpg'
import Portfolio5 from '../../assets/portfolio5.png'
import Portfolio6 from '../../assets/portfolio6.jpg'
import PortfolioCase from './PortfolioCase'

const data = [
    { img: Portfolio1, about: 'This is a selfcare project', git: 'https://github.com', demo: 'https://akashmasih.vercel.app/' },
    { img: Portfolio2, about: 'This is a selfcare project', git: 'https://github.com', demo: 'https://akashmasih.vercel.app/' },
    { img: Portfolio3, about: 'This is a selfcare project', git: 'https://github.com', demo: 'https://akashmasih.vercel.app/' },
    { img: Portfolio4, about: 'This is a selfcare project', git: 'https://github.com', demo: 'https://akashmasih.vercel.app/' },
    { img: Portfolio5, about: 'This is a selfcare project', git: 'https://github.com', demo: 'https://akashmasih.vercel.app/' },
    { img: Portfolio6, about: 'This is a selfcare project', git: 'https://github.com', demo: 'https://akashmasih.vercel.app/' },
]

function Portfolio() {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map((item, i) => (
                        <PortfolioCase
                            key={i}
                            img={item.img}
                            about={item.about}
                            git={item.git}
                            demo={item.demo}
                        />
                    ))
                }
            </div>
        </section >
    )
}

export default Portfolio