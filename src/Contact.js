import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm';


function Contact() {
    return (
        
        <div className="contact animate__animated animate__fadeInUp">
        
                <div className="contact__title">
                    <h1>Get In Touch</h1>
                    <div className="long-line"></div>
                </div>

                <div className="contact__description">
                    <p> I'm currently looking for new opportunities! If you want to get in touch or just want to say hi, send me a message and I'll try my best to get back to you as soon as possible.</p>
                </div>
        
                <div className="contact__form">
                <ContactForm /> 
                </div>
                   
        </div>
    );
}

export default Contact;
