import styled from 'styled-components';

export const GridLayout = styled.div`
  display: grid;

  @media screen and (min-width: 768px) {
    grid-template-columns: 0.45fr 1fr;
  }
`;

export const Container = styled.section`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: auto;
  overflow: hidden;
  padding: 2rem 0;
`;

export const GridContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Center = styled.div`
  width: 80vw;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.ink50};
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .react-icons {
    color: ${(props) => props.theme.ink50};
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    height: 140px;
    padding: 1rem 0;
    font-size: 1.5rem;
    padding-right: 2rem;
    :not(:nth-child(7)) {
      border-bottom: 1px solid ${(props) => props.theme.neutral60};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  padding: 0 0 1rem 0;
  margin-bottom: 0;
  font-size: 1rem;
  color: ${(props) => props.theme.ink50};
  letter-spacing: 1px;
  word-break: keep-all;
  border-bottom: 1px solid ${(props) => props.theme.neutral60};

  @media screen and (min-width: 768px) {
    padding: 1rem 0;
    margin-bottom: 0;
    height: 140px;
    > p {
      max-width: 600px;
    }
  }
`;
