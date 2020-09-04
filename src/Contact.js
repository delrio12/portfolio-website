import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm';
import { AwesomeButtonSocial } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';


function Contact() {
    return (
        <div className="contact">
            <div className="contact__description">

            </div>
            <h2>Get in touch</h2>
            <p>
                If you want to get in touch, fill up the form below or send an email to addelrio11@gmail.com and let's talk.
            </p>

            <ContactForm />

            <h3> Let's get social </h3>
            
            <div className="contact__social">
                {/* Social Media Buttons*/}
                
                <AwesomeButtonSocial
                cssModule={AwesomeButtonStyles}
                type="linkedin"
                url="https://www.linkedin.com/in/andresdelrio11">
                    LINKEDIN
                </AwesomeButtonSocial>

                <AwesomeButtonSocial
                cssModule={AwesomeButtonStyles}
                type="github"
                url="https://github.com/delrio12">
                    GITHUB
                </AwesomeButtonSocial>
                
                <AwesomeButtonSocial
                cssModule={AwesomeButtonStyles}
                type="twitter"
                url="https://twitter.com/DevRio11">
                    TWITTER
                </AwesomeButtonSocial>
            </div>

            

        </div>
    );
}

export default Contact;
