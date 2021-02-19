import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import './ContactTemp.css';

function ContactTemp() {
    return (
    <li className="socialbar__list__item">
                    <a className="hvr-grow" href="mailto:addelrio11@gmail.com" target="_blank">
                        <EmailIcon fontSize="large" />
                    </a>
    </li>
    )
}
export default ContactTemp