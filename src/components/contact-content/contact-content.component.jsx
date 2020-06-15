import React from 'react';

import {
  ContactContentContainer,
  ContactContentBlock,
  ContactImage,
  TwitterIcon,
  IngtagramIcon,
  GmailIcon,
} from './contact-content.styles';

const ContactContent = () => (
  <ContactContentContainer>
    <ContactContentBlock>
      <ContactImage />

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
        <TwitterIcon />
        <GmailIcon />
        <IngtagramIcon />
      </div>
    </ContactContentBlock>
  </ContactContentContainer>
);

export default ContactContent;
