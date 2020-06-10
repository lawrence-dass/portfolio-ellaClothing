import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import CartPopup from '../cart-popup.jsx/cart-pop.component';


import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles';

const CartIcon = ({toggleCartHidden, itemCount}) => {
  const [ modalState, setModalState ] = React.useState(false);


  const openModal = () => {
    console.log('closeModal t')
    setModalState(true)
  }


  const closeModal = () => {
    console.log('closeModal t')
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

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);