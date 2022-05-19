
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* @font-face {font-family: "SF Pro Display"; src: url("//db.onlinewebfonts.com/t/179429c3795fb9aed42c526bd1133cc0.eot"); src: url("//db.onlinewebfonts.com/t/179429c3795fb9aed42c526bd1133cc0.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/179429c3795fb9aed42c526bd1133cc0.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/179429c3795fb9aed42c526bd1133cc0.woff") format("woff"), url("//db.onlinewebfonts.com/t/179429c3795fb9aed42c526bd1133cc0.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/179429c3795fb9aed42c526bd1133cc0.svg#SF Pro Display") format("svg"); } */
  #root, body,html {
    width: 375px;
    height: 100%;
    margin: 0 auto;
    font-size: 62.5%;
    /* font-family: "SF Pro Display"; */
  }
  #root{
    /* background-color: ${theme.colors.surfit_black_2}; */
  }
  * {
    box-sizing: border-box;
	}
  button:hover {
    cursor: pointer;
  }
`;

export default GlobalStyle;