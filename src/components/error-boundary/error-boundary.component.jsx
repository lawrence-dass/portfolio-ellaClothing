import React from 'react';

import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
    };
  }

  // catches all the error happened in the child elements
  static getDerivedStateFromError(error) {
    // processing the error here
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    // handling error if any
    console.log(error);
  }

  // rendering based on error if any
  render() {
    return this.state.hasErrored ? (
      <ErrorImageOverlay>
        <ErrorImageText> Sorry this page is broken </ErrorImageText>
        <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
      </ErrorImageOverlay>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
