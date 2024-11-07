import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
    width: 100%;
    align-content: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  & span {
    & p {
      padding: 0 10px;
      margin: 0;
    }
  }

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    height: 70px;
    justify-content: center;
  }
`;

export const LogoText = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 3rem;
  padding-left: 0.5rem;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    margin: 1rem 0 2rem 0;
  }
`;

export const OptionLink = styled(NavLink)`
  padding: 10px 15px;
  width: auto;

  &:hover {
    color: rgba(117, 19, 93);
  }

  &.${(props) => props.activeclassname} {
    color: blue;
    font-size: 1.01rem;
  }

  transition: all 0.3s ease-in;
`;
