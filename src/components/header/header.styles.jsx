import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
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
`;

export const LogoText = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 3rem;
  padding-left: .5rem;
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    color: rgba(37, 116, 169, 1);
  }
`;

