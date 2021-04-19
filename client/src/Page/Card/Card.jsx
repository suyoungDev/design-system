import React, { useState, Suspense } from 'react';

import Head from '../../Components/Head';
import { Wrapper } from '../../Components/Wrapper';
import CardModulesList from './Section/CardModulesList';
import useIsOpen from '../../Hook/useIsOpen';
const SetColorsList = React.lazy(() => import('./Section/SetColorsList'));
const ViewCode = React.lazy(() => import('../../Components/ViewCode'));

const Card = () => {
  const [language, setLanguage] = useState(true);
  const [isCodeOpen, setIsCodeOpen] = useIsOpen();
  const [isOpen, setIsOpen] = useIsOpen();
  const [style, setStyle] = useState(false);

  const changeLanguage = () => {
    setLanguage(!language);
  };

  const changeStyle = () => {
    setStyle(!style);
  };

  return (
    <Wrapper id='cards'>
      <Head
        title='card'
        viewCode={setIsCodeOpen}
        changeLanguage={changeLanguage}
        changeStyle={changeStyle}
        palette={setIsOpen}
      />
      <Suspense fallback={<div>...loading..</div>}>
        {isCodeOpen && <ViewCode card />}
      </Suspense>
      <Suspense fallback={<div>...loading...</div>}>
        {isOpen && <SetColorsList isOpen={isOpen} />}
      </Suspense>
      <CardModulesList language={language} style={style} />
    </Wrapper>
  );
};

export default Card;
