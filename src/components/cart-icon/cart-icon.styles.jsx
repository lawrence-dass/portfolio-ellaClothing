import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 30px;
    right: 10px;
  }
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 24px;
  height: 24px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
