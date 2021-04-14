import styled, { css } from 'styled-components';
import Doted from '../../constance/dot.webp';
import BrghtGradation from '../../constance/brightGradation.webp';
import DarktGradation from '../../constance/darkgradation.webp';

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  background-color: ${({ gradation }) =>
    gradation ? 'rgba(0,0,0,0)' : '#f3efa1'};
  background-image: ${({ gradation }) =>
    gradation && `linear-gradient(#f3efa1, white)`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const BasicContainer = styled(Container)`
  background-image: url(${DarktGradation});
  background-position: bottom left;
  background-repeat: no-repeat;
  width: 100%;
  align-items: flex-start;
  height: 70vh;
`;

export const Dotted = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${({ section }) => (section ? '0' : '-1')};
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  background-image: url(${Doted});
  opacity: ${({ screen }) => (screen ? '1' : '.5')};
  background-size: 190vw;
`;
const defineTitleStyles = (props) => {
  if (props.third) return thirdStyles;
  if (props.small) return smallStyles;
};

const smallStyles = css`
  text-align: left;
  display: flex;
  flex-direction: column;

  > span {
    font-size: 3rem;
    font-weight: bold;
    color: ${(props) => props.theme.white};
  }
`;

const thirdStyles = css`
  text-align: left;

  > span {
    font-size: 5rem;
    font-weight: bold;
    margin-left: 2rem;
  }
`;

export const MainTitle = styled.div`
  margin-top: 2em;
  text-align: center;
  word-break: keep-all;
  z-index: 2;
  background-color: transparent;

  h2 {
    font-size: 7rem;
  }

  ${defineTitleStyles}
`;

const defineStyle = (props) => {
  if (props.sub) return subStyles;
  if (props.subSmall) return subSmallStyles;
};

const subSmallStyles = css`
  color: ${(props) => props.theme.white};

  > span {
    font-size: 1.2rem;
    margin-top: 1.5rem;
  }
`;

const subStyles = css`
  color: ${(props) => props.theme.purple60};
  font-size: 1.5rem;
  font-weight: 200;
  margin-top: 4rem;

  > span:not(:first-child) {
    margin-top: 0.7rem;
  }
`;

export const SubText = styled.div`
  z-index: 2;
  word-break: keep-all;
  font-size: 1rem;
  color: ${(props) => props.theme.ink50};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > span:not(:first-child) {
    margin-top: 0.3rem;
  }

  ${defineStyle}
`;

export const SubTitle = styled.div`
  word-break: keep-all;

  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 5rem;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const Inline = styled.span`
  color: ${(props) => props.theme.purple60};
  font-weight: bold;
  font-family: 'Roboto Condensed', sans-serif;
`;

export const Outline = styled.span`
  color: transparent;
  -webkit-text-stroke-color: ${(props) => props.theme.purple60};
  -webkit-text-stroke-width: 1px;
  font-family: 'Roboto Condensed', sans-serif;
`;

export const Head = styled.header``;

export const Gradation = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${BrghtGradation});
  background-position: bottom left;
  background-repeat: no-repeat;
  z-index: 1;
`;
