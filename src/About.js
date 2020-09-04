import React from 'react'
import './About.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

function About() {
    return (
        <div className="about">
            <div className="about__me">
                <h1 className="about__me__name">Hey, I'm Andres!</h1>
                <h4 className="about__me__description">I am a Front End Developer &amp; Programmer based in Canada. I make web apps, usually with REACTJS.</h4>
                <img className="about__me__picture" src="https://media-exp1.licdn.com/dms/image/C5603AQGFTdhG_IAb8Q/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=VyVOdBS-afK6sFO9C5vHvQi1njYlgMMKWfXhy6WXRSs" alt="Andres" /> 
                <div className="about__me__social">
                
                    {/* Social Media Buttons*/}
                    
                    <a className="about__me__social__icons" href="https://www.linkedin.com/in/andresdelrio11" target="_blank">
                        <LinkedInIcon fontSize="large" >
                            LINKEDIN
                        </LinkedInIcon>
                    </a>
                    <a className="about__me__social__icons" href="https://github.com/delrio12" target="_blank">
                        <GitHubIcon fontSize="large">
                            GITHUB
                        </GitHubIcon>
                    </a>     
                    <a className="about__me__social__icons" href="https://twitter.com/devrio11" target="_blank">
                        <TwitterIcon fontSize="large">
                            TWITTER
                        </TwitterIcon>
                    </a>  
                </div>
            </div>
        </div>
    )
}

export default About;
