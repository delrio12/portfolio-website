import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm';
import Header from './Header';

function Contact() {
    return (
        
        <div className="contact">
            <div className="contact__title">
                <p>GET IN TOUCH</p>
            </div>

            <div className="contact__description">
                <p> If you want to get in touch, fill up the form below or send an email to addelrio11@gmail.com and let's talk.</p>
            </div>
            
            <ContactForm /> 
                     
        </div>
    );
}

export default Contact;
