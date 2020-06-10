import React, { useState } from 'react';

import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';

import { ContactFormContainer } from './contact-form.styles';

import './contact-form.styles.scss';

const ContactForm = () => {
  const [ messageDetails , setMessageDetails ] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { name, email, message } = messageDetails;



  const handleSubmit = () => {};

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMessageDetails({ ...messageDetails, [name]: value });
  };

  return (
    <ContactFormContainer>
      <h2> Please send us your query through below form and we'll get back to you within 3 working days. </h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <FormInput
          type="text"
          name="name"
          value={name}
          handleChange={handleChange}
          label="Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <textarea name="message" onChange={handleChange} value={message} placeholder="Type your message here..." className="textarea"></textarea>
        <div>
          <CustomButton type="submit"> Sign In </CustomButton>
        </div>
      </form>
    </ContactFormContainer>
  );
};

export default ContactForm;
