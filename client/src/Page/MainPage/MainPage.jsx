import React from 'react';
import ColorSection from '../HexColorChip/ColorSection';
import Typography from '../Typography/Typography';
import BaseColor from '../BaseColor/BaseColor';
import Card from '../Card/Card';
import ThemeName from './section/ThemeName';
import Save from '../Save/Save';
import { withRouter } from 'react-router-dom';

const MainPage = ({ history }) => {
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

export default withRouter(MainPage);
