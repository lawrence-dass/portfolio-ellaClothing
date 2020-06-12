import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 20px 60px;

    @media screen and (max-width: 800px){
      padding: 10px;
    }
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;