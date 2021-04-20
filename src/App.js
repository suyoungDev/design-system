import { Route, Switch } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { allColors } from './themes/theme';

import MainPage from './Page/MainPage/MainPage';
import LandingPage from './Page/LandingPage/LandingPage';

import NavBar from './Page/Menu/NavBar';
import Footer from './Page/Footer/Footer';

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
          <NavBar />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/main' component={MainPage} />
          </Switch>
          <Footer />
        </Provider>
      </IconContext.Provider>
    </ThemeProvider>
  );
}

export default App;
