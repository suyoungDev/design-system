import React, { Suspense } from 'react';

import { Wrapper } from '../../Components/Wrapper';
import Head from '../../Components/Head';
import BaseColorList from './Section/BaseColorList';
import useIsOpen from '../../Hook/useIsOpen';
import { baseColorListStore } from '../../Store/BaseColorStore';
const ViewCode = React.lazy(() => import('../../Components/ViewCode'));

const BaseColor = () => {
  const [isOpen, setIsOpen] = useIsOpen();

  const addNew = () => {
    baseColorListStore.addNewBaseColor();
  };

  return (
    <Wrapper id='maincolors'>
      <Head title='Main Colors' addNew={addNew} viewCode={setIsOpen} />
      <Suspense fallback={<div>loading..</div>}>
        {isOpen && <ViewCode base />}
      </Suspense>
      <BaseColorList store={baseColorListStore} />
    </Wrapper>
  );
};

export default BaseColor;
