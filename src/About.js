import React from 'react';

import './About.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';


function About() {
    return (
        <div className="about">
            <div className="about--left"> 
                <h2 className="animate__animated animate__fadeInUp about__description"> Hey, I'm </h2>
                <h1 className="animate__animated animate__fadeInUp about__name">Andres Del Rio.</h1>
                <h4 className="animate__animated animate__fadeInUp about__description">A Front End Developer &amp; Programmer based in Canada. I enjoy creating websites, applications, or anything in between. I specialize in ReactJS.</h4>
            </div>
            <div className="about--right"> 
                {/* <img className="about__picture" src="https://media-exp1.licdn.com/dms/image/C5603AQGFTdhG_IAb8Q/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=VyVOdBS-afK6sFO9C5vHvQi1njYlgMMKWfXhy6WXRSs" alt="Andres" /> 
                <div className="about__social">
                
                     Social Media Buttons

                    <a className="hvr-grow hvr-underline-from-center" href="mailto:addelrio11@gmail.com" target="_blank">
                        <EmailIcon fontSize="large" />
                    </a>

                    <a className="hvr-grow hvr-underline-from-center" href="https://www.linkedin.com/in/andresdelrio11" target="_blank">
                        <LinkedInIcon fontSize="large" /> 
                    </a>
                    <a className="hvr-grow hvr-underline-from-center" href="https://github.com/delrio12" target="_blank">
                        <GitHubIcon fontSize="large" />
                    </a>     
                    <a className="hvr-grow hvr-underline-from-center" href="https://twitter.com/devrio11" target="_blank">
                        <TwitterIcon fontSize="large" />
                    </a>  
                </div> */}
            </div>
        </div>
    )
}

export default About;
