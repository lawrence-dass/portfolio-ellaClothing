import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/make-group.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { signOutStart } from '../../redux/user/user.action'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, LogoText } from './header.styles';



import './header.styles.scss';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo"/>
      <LogoText>ella</LogoText>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink  to="/"> HOME </OptionLink>
      <OptionLink  to="/shop"> SHOP </OptionLink>
      <OptionLink  to="/shop"> CONTACT </OptionLink>
      {
        currentUser ?
        <OptionLink as="div"  onClick={ signOutStart } > SIGN OUT </OptionLink> :
        <OptionLink  to="/signin" > SIGN IN </OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    { hidden ? null : <CartDropdown />}
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);