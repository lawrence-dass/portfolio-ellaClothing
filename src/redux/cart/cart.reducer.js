import CartActionTypes from './cart.types.js'
import { addItemToCart, removeItemFromCart } from './cart.util'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';


const MySwal = withReactContent(Swal)


const Toast = MySwal.mixin({
  toast: true,
  position: "bottom-right",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  console.log('action', action)
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM:
      Toast.fire({
        icon: 'success',
        title: `${action.payload.name} added to your cart.`
      })
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      }
    case CartActionTypes.CLEAR_CART:

      return {
        ...state,
        cartItems: []
      }
    default:
      return state;
  }
}


export default cartReducer;