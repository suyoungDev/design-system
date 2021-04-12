import React from 'react';

import { Wrapper } from '../../Components/Wrapper';
import Head from '../../Components/Head';
import ViewCode from '../../Components/ViewCode';
import BaseColorList from './Section/BaseColorList';
import useIsOpen from '../../Hook/useIsOpen';
import { baseColorListStore } from '../../Store/BaseColorStore';

const BaseColor = () => {
  const [isOpen, setIsOpen] = useIsOpen();
  const clickHandle = () => {
    baseColorListStore.addNewBaseColor();
  };

  return (
    <Wrapper>
      <Head title='Main Colors' addNew={clickHandle} viewCode={setIsOpen} />
      <ViewCode isOpen={isOpen} base />
      <BaseColorList store={baseColorListStore} />
    </Wrapper>
  );
};

export default BaseColor;
