import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { BiPalette, BiWorld } from 'react-icons/bi';

import { HeadingRow } from '../../Components/Row';
import { Wrapper } from '../../Components/Wrapper';
import { SmallButton } from '../../Components/Button';
import SetColorsList from './Section/SetColorsList';
import CardModulesList from './Section/CardModulesList';

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(true);

  return (
    <Wrapper>
      <HeadingRow>
        <h2>Cards</h2>
        <div>
          <SmallButton
            narrow
            onClick={() => {
              setLanguage(!language);
            }}
          >
            <BiWorld />
          </SmallButton>
          <SmallButton narrow onClick={() => setIsOpen(!isOpen)}>
            <BiPalette />
          </SmallButton>
        </div>
      </HeadingRow>
      <SetColorsList isOpen={isOpen} />
      <CardModulesList language={language} />
    </Wrapper>
  );
};

export default Card;
