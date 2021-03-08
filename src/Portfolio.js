import React from 'react'
import './Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio() {
    return (
        <div className="portfolio animate__animated animate__fadeIn">

            <div className="portfolio__description">
                <h1>My Projects</h1>
                <div className="long-line"></div>
            </div>
            <div className ="portfolio__projects">

                <div className="portfolio__project">
                    <img className="portfolio__project__image" src="https://firebasestorage.googleapis.com/v0/b/portfolio-website-582f4.appspot.com/o/images%2Fwebsite.PNG?alt=media&token=e032015d-6459-4a4d-9c81-6d0fafdc27fa" alt="andresdelrio.dev" />
                    <div className="portfolio__project__image__overlay">
                        <div className="portfolio__project__description">
                            <h3>www.andresdelrio.dev</h3>
                            <p>Built my personal portfolio website.</p>
                            <ul>
                                <li className="portfolio__button">
                                    <a  href="#" target="_blank" href="https://www.andresdelrio.dev">
                                        <button type="button" className="btn btn-light btn-sm">Go to Website</button>
                                    </a>
                                </li>
                                <li className="portfolio__button">
                                    <a  href="#" target="_blank" href="https://github.com/delrio12/portfolio-websiteV0">
                                        <button type="button" className="btn btn-warning btn-sm">Go to Github Rep</button>
                                    </a>
                                </li>  
                            </ul>
                            <p>Technologies I used for this project:</p>
                            <ul className="three-col">
                                <li className="portfolio__button">
                                    <button className="btn btn-secondary btn-sm" disabled>
                                        HTML5
                                    </button>
                                </li>
                                <li className="portfolio__button">
                                    <button className="btn btn-secondary btn-sm"  disabled>
                                        JAVASCRIPT
                                    </button>
                                </li>
                                <li className="portfolio__button">
                                    <button className="btn btn-secondary btn-sm"  disabled>
                                        CSS
                                    </button>
                                </li>
                                <li className="portfolio__button">
                                    <button className="btn btn-secondary btn-sm"  disabled>
                                        NODEJS
                                    </button>
                                </li>
                                <li className="portfolio__button">
                                    <button className="btn btn-secondary btn-sm"  disabled>
                                        REACTJS
                                    </button>
                                </li>
                                <li className="portfolio__button">
                                    <button className="btn btn-secondary btn-sm"  disabled>
                                        FIREBASE
                                    </button>
                                </li>
                                <li className="portfolio__button">
                                    <button className="btn btn-secondary btn-sm"  disabled>
                                        MATERIAL-UI
                                    </button>
                                </li>
                                <li className="portfolio__button">
                                    <button className="btn btn-secondary btn-sm"  disabled>
                                        BOOTSTRAP
                                    </button>
                                </li>
                                
                            </ul>
                            
                        </div>
                    </div>    
                </div>



                <div className="portfolio__project">
                    <img className="portfolio__project__image" src="https://firebasestorage.googleapis.com/v0/b/portfolio-website-582f4.appspot.com/o/images%2Ftwitter-clone.png?alt=media&token=7252c97e-90de-4c3f-9f18-e5f2c0352fd1" alt="twitter-clone" />
                    <div className="portfolio__project__image__overlay">
                        <div className="portfolio__project__description">
                            <h3>Twitter Clone</h3>
                            <p>Built a clone of the Twitter homepage.</p>
                            <ul>
                                <li className="portfolio__button">
                                    <a  href="#" target="_blank" href="https://twitter-clone-55b33.web.app/">
                                        <button type="button" className="btn btn-light btn-sm">Go to Website</button>
                                    </a>
                                </li>
                                <li className="portfolio__button">
                                    <a  href="#" target="_blank" href="https://github.com/delrio12/twitter-clone">
                                        <button type="button" className="btn btn-warning btn-sm">Go to Github Rep</button>
                                    </a>
                                </li>  
                            </ul>
                            <p>Technologies I used for this project:</p>
                            <ul className="three-col">
                                <li className="portfolio__button">
                                    <button className="btn btn-secondary btn-sm" disabled>
                                        HTML5
                                    </button>
                                </li>
                                <li className="portfolio__button">
                                    <button className="btn btn-secondary btn-sm"  disabled>
                                        CSS
                                    </button>
                                </li>
                                <li className="portfolio__button">
                                    <button className="btn btn-secondary btn-sm"  disabled>
                                        JAVASCRIPT
                                    </button>
                                </li>
                                <li className="portfolio__button">
                                    <button className="btn btn-secondary btn-sm"  disabled>
                                        REACTJS
                                    </button>
                                </li>
                                <li className="portfolio__button">
                                    <button className="btn btn-secondary btn-sm"  disabled>
                                        FLEXBOX
                                    </button>
                                </li>
                                <li className="portfolio__button">
                                    <button className="btn btn-secondary btn-sm"  disabled>
                                        FIREBASE
                                    </button>
                                </li>
                                <li className="portfolio__button">
                                    <button className="btn btn-secondary btn-sm"  disabled>
                                        MATERIAL-UI
                                    </button>
                                </li>
                            </ul>
                            
                        </div>
                    </div>    
                </div>


                <div className="portfolio__project">
                    <iframe className="portfolio__project__image" src="https://giphy.com/embed/RwJcGlIksyuedXPQhf" width="800" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/RwJcGlIksyuedXPQhf"></a></p>
                    <div className="portfolio__project__image__overlay">
                        <div className="portfolio__project__description">
                            <h3>Flappy Bird Game</h3>
                            <p>Built a flappy bird game using HTML and Javascript.</p>
                            <ul>
                                <li className="portfolio__button">
                                <a href="https://flappy-bird11.herokuapp.com/" target="_blank" >
                                    <button type="button" className="btn btn-light btn-sm">Go to Website</button>
                                </a>
                                </li>
                                <li className="portfolio__button">
                                    <a  href="#" target="_blank" href="https://github.com/delrio12/flappy-bird11">
                                        <button type="button" className="btn btn-warning btn-sm">Go to Github Rep</button>
                                    </a>
                                </li>  
                            </ul>
                            <p>Technologies I used for this project:</p>
                            <ul className="three-col">
                                <li className="portfolio__button">
                                    <button className="btn btn-secondary btn-sm" disabled>
                                        HTML5
                                    </button>
                                </li>
                                <li className="portfolio__button">
                                    <button className="btn btn-secondary btn-sm"  disabled>
                                        CSS
                                    </button>
                                </li>
                                <li className="portfolio__button">
                                    <button className="btn btn-secondary btn-sm"  disabled>
                                        JAVASCRIPT
                                    </button>
                                </li>
                            </ul>
                            
                        </div>
                    </div>    
                </div>
                {/* <div className="portfolio__project">
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
                </div> */}
                
            </div>
            

        </div>

    
    );
    
}

var myWindow;
function openWin() {
    myWindow = window.open("", "", "width=100, height=100");
  }

export default Portfolio
