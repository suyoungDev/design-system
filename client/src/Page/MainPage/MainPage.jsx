import React from 'react';
import ColorSection from '../HexColorChip/ColorSection';
import Typography from '../Typography/Typography';
import BaseColor from '../BaseColor/BaseColor';
import Card from '../Card/Card';
import ThemeName from './section/ThemeName';
import Save from '../Save/Save';

const MainPage = () => {
  return (
    <>
      <main>
        <ThemeName />
        <ColorSection />
        <BaseColor />
        <Typography />
        <Card />
        <Save />
      </main>
    </>
  );
};

export default MainPage;
