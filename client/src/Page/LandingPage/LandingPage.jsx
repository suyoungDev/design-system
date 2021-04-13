import React from 'react';
import styled from 'styled-components';
import ColorSection from '../HexColorChip/ColorSection';
import Typography from '../Typography/Typography';
import BaseColor from '../BaseColor/BaseColor';
import Card from '../Card/Card';
import ThemeName from './section/ThemeName';
import Menu from '../Menu/Menu';
import Save from '../Save/Save';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LandingPage = () => {
  return (
    <Page>
      <Menu />
      <ThemeName />
      <ColorSection />
      <BaseColor />
      <Typography />
      <Card />
      <Save />
    </Page>
  );
};

export default LandingPage;
