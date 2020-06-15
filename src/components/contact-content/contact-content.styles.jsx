import styled, { css } from 'styled-components';
import { ReactComponent as Img } from '../../assets/contact_us.svg';

import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import { ReactComponent as Ingtagram } from '../../assets/instagram.svg';
import { ReactComponent as Gmail } from '../../assets/gmail.svg';

const IconCommonStyle = css`
  width: 20px;
  height: 20px;
  margin: 0 10px;
  cursor: pointer;
`;



export const ContactContentContainer = styled.div`
  width: 50%;
  text-align: center;
  height: 100%;

  @media screen and (max-width: 600px) {
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }
`;

export const ContactContentBlock = styled.div`
  width: 80%;

  @media screen and (max-width: 600px) {
    width: 95%;
    margin: 6rem auto 1rem auto;
  }
`;

export const ContactImage = styled(Img)`
  width: 100%;
  height: 250px;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const TwitterIcon = styled(Twitter)`
  ${IconCommonStyle}
`;

export const IngtagramIcon = styled(Ingtagram)`
  ${IconCommonStyle}
`;

export const GmailIcon = styled(Gmail)`
  ${IconCommonStyle}
`;