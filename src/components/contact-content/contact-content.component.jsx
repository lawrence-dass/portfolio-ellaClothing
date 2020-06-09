import React from 'react';

import { ContactContentContainer } from './contact-content.styles';

import { ReactComponent as ContactImg } from '../../assets/contact_us.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import { ReactComponent as IngtagramIcon } from '../../assets/instagram.svg';
import { ReactComponent as GmailIcon } from '../../assets/gmail.svg';

import './contact-content.styles.scss';

const ContactContent = () => (
  <ContactContentContainer>
    <div className="content">
      <ContactImg className="contact-img" />

      <h1> How to find us </h1>
      <p>
        "Fashion you can buy, but style you possess. The key to style is
        learning who you are, which takes years. There's no how-to road map to
        style. It's about self expression and, above all, attitude." ~ Iris
        Apfel
      </p>
      <p>
        We are Ella clothing care lot about clothing and more than that we care
        about out client who ware what we make here, we want you 100%
        statisfied, if not we are avaialable 24X7 at your service. If you have
        any question or concern regarding our product or services please contact
        us and we will ensure you are happy with us always, also give us
        feedback cause we care about you views and take them seriously.
      </p>
      <div>
        <TwitterIcon className="contact-icon" />
        <GmailIcon className="contact-icon" />
        <IngtagramIcon className="contact-icon" />
      </div>
    </div>
  </ContactContentContainer>
);

export default ContactContent;
