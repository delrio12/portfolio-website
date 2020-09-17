import React from 'react';
import './ContactForm.css';

class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
  
  render() {
   return(
     <div className="contactForm">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          
            <div className="contactForm__group--half">
                <label className="contactForm__label"> NAME </label>
                <input type="text" className="contactForm__name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="contactForm__group--half">
              <label className="contactForm__label"> EMAIL </label>
                <input type="email" className="contactForm__email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="contactForm__group">
              <label className="contactForm__label"> HOW CAN I HELP? </label>  
                 <textarea className="contactForm__message" rows="4"  value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <button type="submit" className="button__primary">Send Message</button>
        </form>
      </div>
   );
  }
  
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
  
  handleSubmit(event) {

  }
  }
  
  export default ContactForm;