import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { createStructuredSelector} from 'reselect';


import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import CustomButton from '../custom-button/custom-button.component';

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

const CartPopup = ({cartItems, modalState, closeModal, history }) => {
  return (
    <Modal 
    isOpen={modalState}
    contentLabel="Modal Label"
    onRequestClose={closeModal}
    overlayClassName="modalOverlay"
    ariaHideApp={false}
    className="cardModal-content"
    style={{
     content: {
      //  position: 'absolute',
      //  top: '280px',
      //  left: '1220px',
      //  margin: '0 auto',
      //  transform: 'translate(-50%,-50%)',
      //  backgroundImage:
      //  "linear-gradient(to bottom, rgba(245, 246, 252, 0.96), rgba(131, 67, 115, 0.93)),url('https://images.unsplash.com/photo-1574634534894-89d7576c8259?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80')",
      //  width: '300px',
      //  height: '50%'
     }
   }}
 >
<span className="cross-btn" onClick={() => closeModal()}> &#10005; </span>
<CartItemsContainer>
      { cartItems.length ?
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
        <EmptyMessageContainer> Your cart is empty! </EmptyMessageContainer>
      }
    </CartItemsContainer>
    <CartDropdownButton onClick={()=>{
      closeModal()
      history.push('/checkout');
      }}>
        GO TO CHECKOUT
      </CartDropdownButton>
</Modal>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartPopup));