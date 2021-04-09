import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }

  .react-icons {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.neutral70};
    :not(:last-child) {
      margin-right: 0.5rem;
    }
    :hover {
      color: ${(props) => props.theme.purple50};
    }
    transition: all 0.3s ease;
  }
`;
