import React from 'react';
import ColorSection from '../HexColorChip/ColorSection';
import Typography from '../Typography/Typography';
import BaseColor from '../BaseColor/BaseColor';
import Card from '../Card/Card';
import ThemeName from './section/ThemeName';
import Menu from '../Menu/Menu';
import Save from '../Save/Save';
import EnterPage from '../EnterPage/EnterPage';
import Footer from '../Footer/Footer';

const LandingPage = () => {
  return (
    <>
      <Menu />
      <EnterPage />
      <main>
        <ThemeName />
        <ColorSection />
        <BaseColor />
        <Typography />
        <Card />
        <Save />
        <Footer />
      </main>
    </>
  );
};

export default LandingPage;
