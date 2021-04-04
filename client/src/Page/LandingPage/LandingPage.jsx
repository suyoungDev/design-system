import React from 'react';
import ColorSection from '../HexColorChip/ColorSection';
import styled from 'styled-components';
import Typography from '../Typography/Typography';
import BaseColor from '../BaseColor/BaseColor';
import Card from '../Card/Card';
import ThemeName from './section/ThemeName';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LandingPage = () => {
  return (
    <Page>
      <ThemeName />
      <ColorSection />
      <BaseColor />
      <Typography />
      <Card />
    </Page>
  );
};

export default LandingPage;
