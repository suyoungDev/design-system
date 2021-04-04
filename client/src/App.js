import LandingPage from './Page/LandingPage/LandingPage';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { allColors } from './themes/theme';
import { IconContext } from 'react-icons';

function App() {
  return (
    <ThemeProvider theme={allColors}>
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <GlobalStyle />
        <LandingPage />
      </IconContext.Provider>
    </ThemeProvider>
  );
}

export default App;
