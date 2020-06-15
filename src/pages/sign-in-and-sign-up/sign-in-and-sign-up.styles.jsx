import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  height: calc(100vh - 190px);

  @media screen and (max-width: 600px) {
    display: block;
    height: 100%;
    margin: 6rem auto;
    text-align: center;
    width: 100%;
    overflow: hidden;
  }
`;