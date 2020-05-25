import CartActionTypes from './card.types';

export const toggleCartHidden = () => {
  console.log('toggleCartHidden ttt')
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN
  }
}

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item 
})