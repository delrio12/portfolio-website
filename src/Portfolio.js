import React from 'react'
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio animate__animated animate__fadeInUp">

            <div className="portfolio__description">
                <h1>My Projects</h1>
                <div className="long-line"></div>
            </div>
            <div className ="portfolio__projects">

                <div className="portfolio__project">
                    <img className="portfolio__project__image" src="https://digitalsynopsis.com/wp-content/uploads/2017/09/free-stock-images-photos-websites-pexels.jpg" alt="Forest" />
                    <div className="portfolio__project__image__overlay">
                        <div className="portfolio__project__description">
                            <h2>Fundaciontransformar.org</h2>
                            <p>Built an entire website for a non-profit organization. Some description, more detailed information. I just need to fill this space</p>
                            <a  href="#" target="_blank" href="https://www.fundaciontransformar.org">Read More</a>
                        </div>
                    </div>    
                </div>
                <div className="portfolio__project">
                    <img className="portfolio__project__image" src="https://digitalsynopsis.com/wp-content/uploads/2017/09/free-stock-images-photos-websites-pexels.jpg" alt="Forest" />
                    <div className="portfolio__project__image__overlay">
                        <div className="portfolio__project__description">
                            <h2>Fundaciontransformar.org</h2>
                            <p>Built an entire website for a non-profit organization. Some description, more detailed information. I just need to fill this space</p>
                            <a  href="#" target="_blank" href="https://www.fundaciontransformar.org">Read More</a>
                        </div>
                    </div>    
                </div>

                <div className="portfolio__project">
                    <img className="portfolio__project__image" src="https://digitalsynopsis.com/wp-content/uploads/2017/09/free-stock-images-photos-websites-pexels.jpg" alt="Forest" />
                    <div className="portfolio__project__image__overlay">
                        <div className="portfolio__project__description">
                            <h2>Fundaciontransformar.org</h2>
                            <p>Built an entire website for a non-profit organization. Some description, more detailed information. I just need to fill this space</p>
                            <a  href="#" target="_blank" href="https://www.fundaciontransformar.org">Read More</a>
                        </div>
                    </div>    
                </div>
                
            </div>
            

        </div>
    )
}

export default Portfolio
