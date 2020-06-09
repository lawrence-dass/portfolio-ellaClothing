import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GoogleSignInContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & span {
    padding-left: 10px;
  }
`;