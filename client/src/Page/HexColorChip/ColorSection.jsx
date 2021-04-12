import React from 'react';

import { Wrapper } from '../../Components/Wrapper';
import Modal from '../../Components/Modal/Modal';
import Head from '../../Components/Head';
import List from './section/List';
import AddColorChip from './section/AddColorChip';
import SubmitHex from './section/SubmitHex';

const ColorSection = () => {
  return (
    <Wrapper>
      <Modal>
        <SubmitHex />
      </Modal>
      <Head title='All Colors' addComponent={<AddColorChip />} />
      <List />
    </Wrapper>
  );
};

export default ColorSection;
