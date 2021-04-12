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
  color: ${(props) => props.hexId};
  width: 540px;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme.neutral50};

  h1 {
    margin-right: 1.5rem;
  }

  h3 {
    margin-bottom: 0.5rem;
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

  const changeColor = (name, value) => {
    item.changeHexId(value);
    setIsOpen();
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
            <h2>{language ? korean.a : english.a}</h2>
          </Column>
          <Column>
            <Row className='jc_sb'>
              <h3>{language ? korean.a : english.a}</h3>

              <div>
                <SmallButton
                  narrow
                  onClick={() => {
                    setLanguage(!language);
                  }}
                >
                  <BiWorld />
                </SmallButton>
                <SmallButton narrow onClick={setIsOpen}>
                  <BiPalette />
                </SmallButton>
                <SmallButton narrow onClick={deleteItem}>
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
