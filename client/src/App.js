import LandingPage from './Page/LandingPage/LandingPage';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { allColors } from './themes/theme';
import { IconContext } from 'react-icons';
import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  timeout: 2000,
  position: positions.BOTTOM_LEFT,
};

function App() {
  return (
    <ThemeProvider theme={allColors}>
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <Provider template={AlertTemplate} {...options}>
          <GlobalStyle />
          <LandingPage />
        </Provider>
      </IconContext.Provider>
    </ThemeProvider>
  );
}

export default App;
