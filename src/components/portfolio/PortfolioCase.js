import React from 'react'

function PortfolioCase({ img, about, git, demo }) {
    return (
        <div className="portfolio__card">
            <img src={img} alt="portfolio" />
            <h3>{about}</h3>
            <div className="portfolio__card-footer">
                <a href={git} target="_blank" className="btn ">Github</a>
                <a href={demo} target="_blank" className="btn btn-primary">Live Demo</a>
            </div>
        </div>
    )
}

export default PortfolioCase