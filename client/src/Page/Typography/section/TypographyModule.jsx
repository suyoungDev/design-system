import React, { useState } from 'react';
import styled from 'styled-components';
import { Column } from '../../../Components/Column';
import { Row } from '../../../Components/Row';
import { SmallButton } from '../../../Components/Button';
import { BiPalette, BiWorld, BiX } from 'react-icons/bi';
import ChangeBaseColorList from '../../BaseColor/Section/ChangeBaseColorList';
import { typoColorStore } from '../../../Store/TypoStore';

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

const KOREAN_LOREM = [
  '가',
  '법원은 최고법원인 대법원과 각급법원으로 조직된다. 대한민국은 통일을 지향하며, 자유민주적 기본질서에 입각한 평화적 통일 정책을 수립하고 이를 추진한다.',
];
const ENGLISH_LOREN = [
  'Aa',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas sed enim ut sem. Adipiscing commodo elit at imperdiet.',
];

const TypographyModule = ({ item, hexId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(true);

  const changeColor = (name, value) => {
    item.changeHexId(value);
    setIsOpen(!isOpen);
  };

  const deleteItem = () => {
    typoColorStore.deleteColor(item.id);
  };

  return (
    <div>
      <TypographyWrapper hexId={hexId}>
        <Row>
          <Column>
            <h1>{language ? KOREAN_LOREM[0] : ENGLISH_LOREN[0]}</h1>
            <h2>{language ? KOREAN_LOREM[0] : ENGLISH_LOREN[0]}</h2>
          </Column>
          <Column>
            <Row className='jc_sb'>
              <h3>{language ? KOREAN_LOREM[0] : ENGLISH_LOREN[0]}</h3>

              <div>
                <SmallButton
                  narrow
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <BiPalette />
                </SmallButton>
                <SmallButton
                  narrow
                  onClick={() => {
                    setLanguage(!language);
                  }}
                >
                  <BiWorld />
                </SmallButton>
                <SmallButton narrow onClick={deleteItem}>
                  <BiX />
                </SmallButton>
              </div>
            </Row>
            <p>{language ? KOREAN_LOREM[1] : ENGLISH_LOREN[1]}</p>
          </Column>
        </Row>
      </TypographyWrapper>
      {isOpen && <ChangeBaseColorList changeColor={changeColor} />}
    </div>
  );
};

export default TypographyModule;
