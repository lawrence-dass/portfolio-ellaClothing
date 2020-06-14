import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import CartPopup from '../cart-popup.jsx/cart-pop.component';


import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles';

const CartIcon = ({itemCount}) => {
  const [ modalState, setModalState ] = React.useState(false);

  const openModal = () => {
    setModalState(true)
  }

  const closeModal = () => {
    setModalState(false);
  }
  
  return (
    <div>
          <CartContainer onClick={() => openModal()}>
       <ShoppingIcon  />
       <ItemCountContainer>{itemCount}</ItemCountContainer>

    </CartContainer>
             <CartPopup modalState={modalState} openModal={openModal} closeModal={closeModal} />
    </div>

  )
}


const mapStateToProps = createStructuredSelector({
  itemCount:  selectCartItemsCount
})

export default connect(mapStateToProps)(CartIcon);