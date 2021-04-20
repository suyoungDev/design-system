import styled from 'styled-components';
import Moving from '../../../constance/movingGradation.webp';

export const GridColumn = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.1fr;
  grid-template-areas: '. box .';

  @media screen and (min-width: 768px) {
    grid-template-columns: 0.4fr 1fr 0.4fr;
  }
`;

export const ImageBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${Moving});
  background-size: cover;
  background-origin: border-box;
  background-repeat: no-repeat;
`;

export const Title = styled.div`
  width: 100%;
  grid-area: title;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  span {
    text-transform: capitalize;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    font-style: italic;
    font-weight: 700;
    font-size: 2rem;
    margin-top: 1rem;
    color: ${(props) => props.theme.white};
  }

  @media screen and (min-width: 768px) {
    span {
      margin-top: 3rem;
      font-size: 3rem;
    }
  }
`;

export const Text = styled.div`
  grid-area: text;
  color: white;

  line-height: 1.2rem;
  word-break: keep-all;
  text-align: center;
  font-size: 0.8rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    max-width: 250px;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    > p {
      padding: 0 2rem;
      max-width: 500px;
      font-size: 1rem;
      line-height: 1.6rem;
    }
  }
`;

export const GradationBox = styled.div`
  position: relative;
  grid-area: gradation;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.5fr 1fr 0.5fr;
  grid-template-areas: 'title' 'text' 'button';
`;

export const BgBox = styled.div`
  position: relative;
  grid-area: box;
  border: 1px solid ${(props) => props.theme.ink30};
  height: 35rem;

  box-shadow: 0 0.9em 1.5em 0 rgba(0, 0, 0, 0.4);
  @media screen and (min-width: 768px) {
    height: 40rem;
  }
`;

export const GridRow = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 40px 1fr 200px;
  grid-template-areas: 'windowSection' 'gradation' 'code';

  @media screen and (min-width: 768px) {
    grid-template-rows: 40px 1fr 230px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  button {
    margin: 1rem 0 2.5rem 0;
  }

  @media screen and (min-width: 768px) {
    button {
      margin: 2rem 0;
    }
  }
`;

export const Code = styled.div`
  grid-area: code;
  margin: 0;
  font-size: 0.7rem;
  background-color: ${(props) => props.theme.white};
  overflow: hidden;
`;

export const WindowSection = styled.div`
  grid-area: windowSection;
  background-color: ${(props) => props.theme.neutral40};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0;

  > span {
    margin-left: 1.5rem;
    color: ${(props) => props.theme.purple70};
    font-size: 0.8rem;
    font-weight: bold;
    font-family: 'Ubuntu', sans-serif;
    font-style: italic;
  }
  > div {
    margin-right: 1.5rem;
    display: flex;
    flex-direction: row;
  }

  .react-icons {
    font-size: 0.8rem;
    color: ${(props) => props.theme.ink30};
    :not(:last-child) {
      margin-right: 1rem;
    }
  }
`;
