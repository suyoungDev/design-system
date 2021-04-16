import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,body{
    margin:0;
    padding:0;
    overflow-x: hidden;
  }
  
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth
  }
  
  color: ${(props) => props.theme.ink50};

  .react-icons {
    font-size: 1rem;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.neutral60};

    :hover {
      color: ${(props) => props.theme.purple50};
    }
    transition: all 0.3s ease;
  }
`;
