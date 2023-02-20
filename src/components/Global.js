import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Rubik', sans-serif;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(142,15,58,1) 50%, rgba(252,176,69,1) 100%);
    padding: 0;
    margin: 0;
  }
`
export default GlobalStyles;
