import LandingPage from './Page/LandingPage/LandingPage';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { allColors } from './themes/theme';

function App() {
  return (
    <ThemeProvider theme={allColors}>
      <GlobalStyle />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
