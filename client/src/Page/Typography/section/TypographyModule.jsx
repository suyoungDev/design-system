import React, { useState } from 'react';
import styled from 'styled-components';
import { Column } from '../../../Components/Column';
import { Row } from '../../../Components/Row';
import { SmallButton } from '../../../Components/Button';
import { BiPalette, BiWorld, BiX } from 'react-icons/bi';
import ChangeBaseColorList from '../../BaseColor/Section/ChangeBaseColorList';
import { typoColorStore } from '../../../Store/TypoStore';
import lorem from '../../../lorem.js';
import useIsOpen from '../../../Hook/useIsOpen';

const { korean, english } = lorem;

const TypographyWrapper = styled.div`
  color: ${({ hexId }) => hexId};
  width: 100%;
  padding: 1rem 1rem;

  h1 {
    margin-right: 1.5rem;
  }

  h3 {
  }

  p {
    line-height: 1.2rem;
    font-size: 0.8rem;
    font-weight: 300;
  }
`;

const TypographyModule = ({ item, hexId }) => {
  const [isOpen, setIsOpen] = useIsOpen();
  const [language, setLanguage] = useState(true);

  const changeColor = (label, value) => {
    item.changeHexId(value);
  };

  const deleteItem = () => {
    typoColorStore.deleteColor(item.id);
  };

  return (
    <div>
      <TypographyWrapper hexId={hexId}>
        <Row>
          <Column>
            <h1>{language ? korean.a : english.a}</h1>
          </Column>
          <Column>
            <Row className='jc_sb al_ct mb-4'>
              <h3>{language ? korean.a : english.a}</h3>

              <div>
                <SmallButton
                  title='언어 변경'
                  narrow
                  onClick={() => {
                    setLanguage(!language);
                  }}
                >
                  <BiWorld />
                </SmallButton>
                <SmallButton narrow onClick={setIsOpen} title='색상 변경'>
                  <BiPalette />
                </SmallButton>
                <SmallButton narrow onClick={deleteItem} title='삭제'>
                  <BiX />
                </SmallButton>
              </div>
            </Row>
            <p>{language ? korean.content : english.content}</p>
          </Column>
        </Row>
      </TypographyWrapper>
      {isOpen && <ChangeBaseColorList changeColor={changeColor} />}
    </div>
  );
};

export default TypographyModule;
