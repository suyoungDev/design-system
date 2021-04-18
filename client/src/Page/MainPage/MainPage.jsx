import React from 'react';
import ColorSection from '../HexColorChip/ColorSection';
import Typography from '../Typography/Typography';
import BaseColor from '../BaseColor/BaseColor';
import Card from '../Card/Card';
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
    <body>
      <Main>
        <ThemeName />
        <ColorSection />
        <BaseColor />
        <Typography />
        <Card />
        <Save />
      </Main>
    </body>
  );
};

export default MainPage;
