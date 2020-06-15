import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { signOutStart } from '../../redux/user/user.action';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  LogoText,
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo width="75px" />
      <LogoText>ella</LogoText>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink exact={true} activeClassName="is-active" to="/">
        HOME
      </OptionLink>
      <OptionLink activeClassName="is-active" to="/shop">
        SHOP
      </OptionLink>
      <OptionLink activeClassName="is-active" to="/contact">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin"> SIGN IN </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
