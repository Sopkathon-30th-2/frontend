import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import { theme } from './styles/theme';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
      나희 다인 헬로우~.~
      </ThemeProvider>
    </>
  );
}

export default App;