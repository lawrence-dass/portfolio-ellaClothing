import CartActionTypes from './card.types.js'
import { addItemToCart } from './cart.util'

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cardReducer = (state = INITIAL_STATE, action ) => {
  console.log('cardReducer ttt, with action', action);
  switch(action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    default:
      return state;
  }
 }


export default cardReducer;