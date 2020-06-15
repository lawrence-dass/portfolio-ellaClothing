import React from 'react';

import ContactContent from '../../components/contact-content/contact-content.component';
import ContactForm from '../../components/contact-form/contact-form.component';

import { ContactContainer } from './contact.styles';

const Contact = () => (
  <ContactContainer>
    <ContactContent />
    <ContactForm />
  </ContactContainer>
);

export default Contact;
