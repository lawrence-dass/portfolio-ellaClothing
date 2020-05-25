import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/ella.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import { auth } from '../../firebase/firebase.util';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo"/>
    </Link>
    <div className="options">
      <Link className="option" to="/shop"> SHOP </Link>
      <Link className="option" to="/shop"> CONTACT </Link>
      {
        currentUser ?
        <div className="option" onClick={ () => auth.signOut() } > SIGN OUT </div> :
        <Link className="option" to="/signin" > SIGN IN </Link>
      }
      <CartIcon />
    </div>
  </div>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);