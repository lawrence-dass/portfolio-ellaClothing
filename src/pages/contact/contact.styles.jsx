import styled from 'styled-components';

export const ContactContainer = styled.div`
  height: calc(100vh - 180px);
  display: flex;

  @media screen and (max-width: 600px) {
    display: block;
    height: 100%;
  }
`;
