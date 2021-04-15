import styled, { css } from 'styled-components';
import Doted from '../../constance/dot.webp';
import BrghtGradation from '../../constance/brightGradation.webp';
import DarktGradation from '../../constance/darkgradation.webp';

export const TitleContainer = styled.div`
  z-index: 2;
  padding: 2.3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(176deg, #3430bd 20%, transparent 70%);

  &.fixed {
    position: fixed;
  }
  &.settled {
    position: relative;
  }

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    padding-left: 6rem;
  }
`;

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
  align-items: center;
  position: relative;
`;

export const SimpleContainer = styled.div`
  position: relative;
  height: auto;
  overflow: hidden;
  padding: 4rem 0;
`;

export const BasicContainer = styled(Container)`
  background-image: url(${DarktGradation});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 70vh;
  max-height: 560px;
  align-items: flex-start;
`;

export const Dotted = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${({ section }) => (section ? '0' : '-1')};
  width: 100vw;
  height: 100%;
  max-width: 100%;
  background-image: url(${Doted});
  opacity: ${({ screen }) => (screen ? '1' : '.7')};
  background-size: ${({ small }) => (small ? '100vw' : '190vw')};
`;
const defineTitleStyles = (props) => {
  if (props.third) return thirdStyles;
  if (props.small) return smallStyles;
  if (props.mini) return miniStyles;
};

const miniStyles = css`
  margin: 3rem 0 2rem 0;
  text-align: left;
  display: flex;
  flex-direction: column;

  > span {
    text-transform: capitalize;
    text-align: center;
    width: 100%;
    font-weight: bold;
    font-size: 2rem;
    color: ${(props) => props.theme.white};
  }

  @media screen and (min-width: 768px) {
    > span {
      font-size: 2.8rem;
    }
  }
`;

const smallStyles = css`
  text-align: left;
  display: flex;
  flex-direction: column;

  > span {
    width: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.white};
  }

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
    width: 100%;
    max-width: 800px;
    > span {
      font-size: 3rem;
    }
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
  width: 100%;

  h2 {
    font-size: 7rem;
    font-weight: bolder;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    width: 70%;
  }

  ${defineTitleStyles}
`;

const defineStyle = (props) => {
  if (props.sub) return subStyles;
  if (props.subSmall) return subSmallStyles;
};

const subSmallStyles = css`
  color: ${(props) => props.theme.white};
  align-items: flex-start;

  > span {
    font-size: 0.9rem;
    margin-top: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    > span {
      text-align: left;
      font-size: 1.2rem;
      margin-top: 1.5rem;
    }
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
  margin-bottom: 2rem;
  transition: all 2s ease;
  > span:not(:first-child) {
    margin-top: 0.3rem;
    transition: opacity 2s ease;
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
  line-height: 4.9rem;
`;

export const Outline = styled.span`
  color: transparent;
  -webkit-text-stroke-color: ${(props) => props.theme.purple60};
  -webkit-text-stroke-width: 1px;
  font-family: 'Roboto Condensed', sans-serif;
`;

export const Head = styled.header`
  position: relative;
`;

export const Gradation = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${BrghtGradation});
  background-position: bottom left;
  background-repeat: no-repeat;
  z-index: 1;
`;
