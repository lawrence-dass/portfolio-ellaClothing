import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

import './homepage.style.scss';

const HomePage = (props) => {
  return (
    <HomePageContainer className="homepage">
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
