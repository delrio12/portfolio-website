import React from 'react';

import axios from 'axios';
import './ContactForm.css'
class ContactForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    }
  }

  handleSubmit(event){
    event.preventDefault();


    axios({
      method: "POST", 
      url:"https://andresdelrio-dev-server.herokuapp.com/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        
        document.getElementById("Sent").classList.add('unhidden');
        document.getElementById("Sent").classList.remove('hidden');
        
        this.resetForm()
      } else if (response.data.status === 'fail') {
        
        document.getElementById("NotSent").classList.add('unhidden');
        document.getElementById("NotSent").classList.remove('hidden');
      }
    })
  }

  resetForm(){
    this.setState({name: '', email: '', message: ''})
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
                <input required type="email" className="contactForm__email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="contactForm__group">
              <label className="contactForm__label"> HOW CAN I HELP? </label>  
                 <textarea className="contactForm__message" rows="1"  value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <button type="submit" className="button__primary">Send Message</button>
            <div id="Sent"className="hidden">
              <br/>
              <h3>Thank you</h3>
              <p>
              Thanks for contacting me, I will get back in touch with you soon.
              </p>
            </div>
            <div id="NotSent" className="hidden">
              <br/>
              <h1>Unable to send</h1>
            </div>
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

  }
  
  export default ContactForm;