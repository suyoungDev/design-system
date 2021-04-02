import React from 'react';
import SubmitHex from './SubmitHex';
import List from '../HexColorChip/List';
import AddColorChip from './AddColorChip';

const LandingPage = () => {
  return (
    <div>
      <List />
      <AddColorChip />
      <SubmitHex />
    </div>
  );
};

export default LandingPage;
