import React from 'react';
import ColorSection from '../HexColorChip/ColorSection';
import Typography from '../Typography/Typography';
import BaseColor from '../BaseColor/BaseColor';
import Card from '../Card/Card';
import Mixin from '../Mixin/Mixin';
import ThemeName from './section/ThemeName';
import Save from '../Save/Save';
import styled from 'styled-components';

const Main = styled.main`
  position: relative;
  padding-top: 4vh;

  @media screen and (min-width: 768px) {
    padding-top: 7rem;
  }
`;

const MainPage = () => {
  return (
    <Main>
      <ThemeName />
      <ColorSection />
      <Mixin />
      <BaseColor />
      <Typography />
      <Card />
      <Save />
    </Main>
  );
};

export default MainPage;
