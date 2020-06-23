import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
  height: calc(100vh - 180px);

  @media screen and (max-width: 400px) {
    padding: 1rem 2rem;
  }
`;
