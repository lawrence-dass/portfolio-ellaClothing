import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;

  @media screen and (max-width: 600px) {
    margin: 3rem 0 1rem 0;
    width: 100%;
  }
`;
