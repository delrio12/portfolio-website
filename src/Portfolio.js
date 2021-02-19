import React from 'react'
import './Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
function Portfolio() {
    return (
        <div className="portfolio animate__animated animate__fadeIn">

            <div className="portfolio__description">
                <h1>My Projects</h1>
                <div className="long-line"></div>
            </div>
            <div className ="portfolio__projects">

                <div className="portfolio__project">
                    <img className="portfolio__project__image" src="https://firebasestorage.googleapis.com/v0/b/portfolio-website-582f4.appspot.com/o/images%2Fwebsite.PNG?alt=media&token=e032015d-6459-4a4d-9c81-6d0fafdc27fa" alt="Forest" />
                    <div className="portfolio__project__image__overlay">
                        <div className="portfolio__project__description">
                            <h2>andresdelrio.dev</h2>
                            <p>Built my personal portfolio website.</p>
                            <ul>
                                <il className="portfolio__button">
                                    <a  href="#" target="_blank" href="https://andresdelrio.dev">
                                        <button type="button" className="btn btn-light">Go to Website</button>
                                    </a>
                                </il>
                                <il className="portfolio__button">
                                    <a  href="#" target="_blank" href="https://github.com/delrio12/portfolio-websiteV0">
                                        <button type="button" className="btn btn-warning">Go to Github Rep</button>
                                    </a>
                                </il>  
                            </ul>
                            <p>Technologies I used for this project:</p>
                            <ul>
                                <il>
                                    <button>

                                    </button>
                                </il>
                            </ul>
                            
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
