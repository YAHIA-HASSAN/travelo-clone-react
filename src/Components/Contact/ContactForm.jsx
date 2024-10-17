import React from 'react';
import './Contact.css';

const ContactForm = () => {
  return (
    
    <div className="content-form-container">
      <h2>Get in Touch</h2>
      <textarea placeholder="Enter Message"></textarea>
      <div className="content-half-width">
        <input type="text" placeholder="Enter your name" />
      </div>
      <div className="content-half-width">
        <input type="email" placeholder="Email" />
      </div>
      <input type="text" placeholder="Enter Subject" />
      <button>SEND</button>
    </div>
  );
};

export default ContactForm;
