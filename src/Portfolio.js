import React from 'react'
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio">

            <div className="portfolio__description">
                <h1>MY PROJECTS</h1>
                <p> Take a look at some of my recent works.</p>
            </div>
            <div className ="portfolio__projects">
                <div className="portfolio__project">
                    <a  className="portfolio__project__image" target="_blank" href="https://www.fundaciontransformar.org">
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQGFTdhG_IAb8Q/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=VyVOdBS-afK6sFO9C5vHvQi1njYlgMMKWfXhy6WXRSs" alt="Forest" />
                    </a>
                    <div className="portfolio__project__title">
                        <h1>Fundaciontransformar.org</h1>
                    </div>
                    <div className="portfolio__project__description">
                        <p>Built an entire website for a non-profit organization. Some description, more detailed information. I just need to fill this space</p>
                    </div>
                </div>

                <div className="portfolio__project">
                    <a  className="portfolio__project__image" target="_blank" href="https://www.fundaciontransformar.org">
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQGFTdhG_IAb8Q/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=VyVOdBS-afK6sFO9C5vHvQi1njYlgMMKWfXhy6WXRSs" alt="Forest" />
                    </a>
                    <div className="portfolio__project__title">
                        <h1>Fundaciontransformar.org</h1>
                    </div>
                    <div className="portfolio__project__description">
                        <p>Built an entire website for a non-profit organization. Some description, more detailed information. I just need to fill this space</p>
                    </div>
                </div>

                <div className="portfolio__project">
                    <a  className="portfolio__project__image" target="_blank" href="https://www.fundaciontransformar.org">
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQGFTdhG_IAb8Q/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=VyVOdBS-afK6sFO9C5vHvQi1njYlgMMKWfXhy6WXRSs" alt="Forest" />
                    </a>
                    <div className="portfolio__project__title">
                        <h1>Fundaciontransformar.org</h1>
                    </div>
                    <div className="portfolio__project__description">
                        <p>Built an entire website for a non-profit organization. Some description, more detailed information. I just need to fill this space</p>
                    </div>
                </div>
                
            </div>
            

        </div>
    )
}

export default Portfolio
