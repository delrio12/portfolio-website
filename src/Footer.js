import React from 'react'
import './Footer.css'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import { Divider } from '@material-ui/core';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__contact"> 
                <li className="footer__contact__item">
                    <a className="hvr-grow " href="https://twitter.com/devrio11" target="_blank">
                        <PhoneIcon fontSize="large" />
                    </a>
                    +1 647 563 11 35
                </li>
                <li className="footer__contact__item">
                    <a className="hvr-grow" href="mailto:addelrio11@gmail.com" target="_blank">
                        <EmailIcon fontSize="large" />
                    </a>
                    addelrio11@gmail.com
                    
                </li>
                <li className="footer__contact__item">
                        <a className="hvr-grow " href="https://twitter.com/devrio11" target="_blank">
                            <LocationOnIcon fontSize="large" />
                        </a>
                        North York, ON, Canada
                </li>
                <li className="footer__contact__item">
                    <a className="hvr-grow" href="https://www.linkedin.com/in/andresdelrio11" target="_blank">
                        <LinkedInIcon fontSize="large" />          
                    </a>
                    Andresdelrio11
                </li>
                
                <li className="footer__contact__item">
                    <a className="hvr-grow " href="https://twitter.com/devrio11" target="_blank">
                        <TwitterIcon fontSize="large" />
                    </a>
                    DevRio11
                </li>
                <li className="footer__contact__item">
                    <a className="hvr-grow " href="https://github.com/delrio12" target="_blank">
                        <GitHubIcon fontSize="large" />   
                    </a> 
                    Delrio11
                </li>
                
                    
            </div>
            <div className="footer__copyright">
                <h3> © 2020 Copyright:  </h3>
                <a id="footer-link-react-copyright" href="https://andresdelrio.dev">
                    <strong>  Andres Del Rio</strong>
                </a>
            </div>
            
        </footer>
    )
}

export default Footer
