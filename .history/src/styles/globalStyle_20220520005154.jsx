import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* @font-face {font-family:; src: url("") format(""); } */
  #root, body,html {
    margin: 0 auto;
    /* font-family: ""; */
  }
  #root{
    /* background-color: ; */
  }
  * {
    box-sizing: border-box;
	}
  button:hover {
    cursor: pointer;
  }
`;

export default GlobalStyle;
