import React from 'react'
import './SocialBar.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

function SocialBar() {
    return (
        <div className="socialbar">
            <ul className="socialbar__list"> 
                <li className="socialbar__list__item">
                    <a className="hvr-grow" href="mailto:addelrio11@gmail.com" target="_blank">
                        <EmailIcon fontSize="large" />
                    </a>
                </li>
                <li className="socialbar__list__item">
                    <a className="hvr-grow" href="https://www.linkedin.com/in/andresdelrio11" target="_blank">
                        <LinkedInIcon fontSize="large" />          
                    </a> 
                </li>
                <li className="socialbar__list__item">
                    <a className="hvr-grow " href="https://twitter.com/devrio11" target="_blank">
                        <TwitterIcon fontSize="large" />
                    </a>
                 </li>
                <li className="socialbar__list__item">
                    <a className="hvr-grow " href="https://github.com/delrio12" target="_blank">
                        <GitHubIcon fontSize="large" />   
                    </a> 
                </li>
            </ul>
        </div>
    )
}

export default SocialBar
