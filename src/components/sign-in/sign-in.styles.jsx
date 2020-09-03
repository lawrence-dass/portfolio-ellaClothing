import styled from 'styled-components';

import { ReactComponent as googleSignInIcon } from '../../assets/google.svg';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const GoogleSignInContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & span {
    padding-left: 10px;
  }
`;

export const GoogleSignInIcon = styled(googleSignInIcon)`
  width: 35px;
  height: 35px;
`;

export const DemoLoginLink = styled.span`
  color: blue;
  cursor: pointer;
`;
