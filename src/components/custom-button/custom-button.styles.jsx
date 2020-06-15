import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleButtonStyles = css`
  background-color: #55abf4;
  color: whitesmoke;
  margin-left: 1.5rem;
  border: none;

  &:hover {
    background-color: #63b1f3;
    border: none;
  }
`;

const getButttonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleButtonStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 600px) {
    padding: 0 5px;
    min-width: 140px;
    margin: 0 auto;
  }

  ${getButttonStyles}
`;
