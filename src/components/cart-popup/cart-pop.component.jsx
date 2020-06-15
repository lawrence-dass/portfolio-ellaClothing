import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import CustomButton from '../custom-button/custom-button.component';
import { ModalContainer, ModalCloseButton } from './cart-pop.styles';

import './cart-pop.styles.scss';

export const CartDropdownButton = styled(CustomButton)`
  margin: 0 auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const CartPopup = ({ cartItems, modalState, closeModal, history }) => (
  <ModalContainer
    isOpen={modalState}
    contentLabel="Modal Label"
    onRequestClose={closeModal}
    overlayClassName="modalOverlay"
    ariaHideApp={false}
  >
    <ModalCloseButton className="cross-btn" onClick={() => closeModal()}>
      &#10005;
    </ModalCloseButton>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer> Your cart is empty! </EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        closeModal();
        history.push('/checkout');
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </ModalContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartPopup));
