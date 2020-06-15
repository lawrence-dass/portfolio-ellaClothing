import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.action';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
  GoogleSignInContainer,
  GoogleSignInIcon,
} from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCreditials, setUserCreditials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCreditials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCreditials({ ...userCreditials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle> I already have an account.</SignInTitle>
      <span> Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            <GoogleSignInContainer>
              <GoogleSignInIcon className="googleSignInIcon" />
              <span> Sign In </span>
            </GoogleSignInContainer>
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
