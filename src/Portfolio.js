import React from 'react'
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <div className="porfolio__title">
                <h1>Portfolio</h1>
            </div>
            <div className="porfolio__description">
                <h2> I Specialize in ReactJS. Simple, popular, trendy.</h2>
            </div>
            <div className="porfolio__projects">
            <img className="profile-pic" src="https://media-exp1.licdn.com/dms/image/C5603AQGFTdhG_IAb8Q/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=VyVOdBS-afK6sFO9C5vHvQi1njYlgMMKWfXhy6WXRSs" alt="Andres" />
            </div>

        </div>
    )
}

export default Portfolio
