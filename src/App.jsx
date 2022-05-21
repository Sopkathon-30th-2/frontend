import React from 'react';
import { ThemeProvider } from 'styled-components';
import Googlebutton from './components/Googlebutton';
import Router from './cores/router';
import GlobalStyle from './styles/globalStyle';
import { theme } from './styles/theme';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
        <Googlebutton />
      </ThemeProvider>
    </>
  );
}

export default App;
