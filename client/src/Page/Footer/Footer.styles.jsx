import styled from 'styled-components';

export const Container = styled.footer`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  background-image: linear-gradient(rgba(0, 0, 0, 0), #f3efa1);
  position: relative;
  padding-top: 8em;
`;

export const WrapperUp = styled.div`
  grid-column: span 14 / 18;

  h2 {
    color: ${(props) => props.theme.purple50};
    margin: 2em 0;
    text-transform: uppercase;
  }
  span {
    font-size: 4vw;
    color: ${(props) => props.theme.ink50};
    font-family: 'Open Sans', sans-serif;
  }

  > div {
    margin-top: 7vh;

    .react-icons {
      font-size: 2.5rem;
      color: ${(props) => props.theme.ink40};
      :hover {
        color: ${(props) => props.theme.purple70};
      }
    }
  }
`;

export const WrapperBottom = styled.div`
  grid-column: span 16 / 20;
  padding-top: 3rem;
  border-top: 1px solid ${(props) => props.theme.ink50};
  margin: 15vh 0 20vh 0;
  color: ${(props) => props.theme.ink50};

  > p {
    font-family: 'Open Sans', sans-serif;
    text-transform: capitalize;
  }
`;
