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
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQGFTdhG_IAb8Q/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=VyVOdBS-afK6sFO9C5vHvQi1njYlgMMKWfXhy6WXRSs" alt="Forest" />
                    <div className="portfolio__project__description">
                        <h2>Fundaciontransformar.org</h2>
                        <p>Built an entire website for a non-profit organization. Some description, more detailed information. I just need to fill this space</p>
                        <a className="portfolio__project__image" href="#" target="_blank" href="https://www.fundaciontransformar.org">Read More</a>
                    </div>
                </div>

                <div className="portfolio__project">
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQGFTdhG_IAb8Q/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=VyVOdBS-afK6sFO9C5vHvQi1njYlgMMKWfXhy6WXRSs" alt="Forest" />
                    <div className="portfolio__project__description">
                        <h2>Fundaciontransformar.org</h2>
                        <p>Built an entire website for a non-profit organization. Some description, more detailed information. I just need to fill this space</p>
                        <a className="portfolio__project__image" href="#" target="_blank" href="https://www.fundaciontransformar.org">Read More</a>
                    </div>
                </div>

                <div className="portfolio__project">
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQGFTdhG_IAb8Q/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=VyVOdBS-afK6sFO9C5vHvQi1njYlgMMKWfXhy6WXRSs" alt="Forest" />
                    <div className="portfolio__project__description">
                        <h2>Fundaciontransformar.org</h2>
                        <p>Built an entire website for a non-profit organization. Some description, more detailed information. I just need to fill this space</p>
                        <a className="portfolio__project__image" href="#" target="_blank" href="https://www.fundaciontransformar.org">Read More</a>
                    </div>
                </div>
                
            </div>
            

        </div>
    )
}

export default Portfolio
