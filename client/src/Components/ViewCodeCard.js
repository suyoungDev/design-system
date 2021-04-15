import chroma from 'chroma-js';
import { cardColorStore } from '../Store/CardColorStore';
import { colorChipListStore } from '../Store/ColorListStore';
import { baseColorListStore } from '../Store/BaseColorStore';

export function cardCode() {
  const {
    buttonColor,
    hoverColor,
    headColor,
    contentColor,
    borderRadius,
  } = cardColorStore;

  const textHex =
    buttonColor && chroma.contrast(buttonColor, 'white') > 2
      ? 'white'
      : 'black';

  const hoverText =
    hoverColor && chroma.contrast(hoverColor, 'white') > 2 ? 'white' : 'black';

  if (
    !buttonColor ||
    !hoverColor ||
    !headColor ||
    !contentColor ||
    !borderRadius
  )
    return '// 옵션을 모두 선택해주세요.';

  const codes = `
    import React from 'react';
    import styled from 'styled-components';

    const Heading = styled.h2\`
      display: flex;
      align-items: center;
      margin: 15px 20px;
      text-transform: capitalize;
      color: ${headColor};
    \`;

    const CardButton = styled.button\`
      display: block;
      align-items: center;
      align-self: center;
      justify-content: center;
      width: 340px;
      height: 35px;
      border: none;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
      margin: 0px 20px;
      font-weight: 400;
      font-size: 0.6rem;
      background-color: ${buttonColor};
      color: ${textHex};
      position: absolute;
      bottom: 20px;
      transition: all 0.3s ease;

      :hover {
        background-color: ${hoverColor};
        color: ${hoverText};
      }
    \`;

    const Content = styled.span\`
      display: flex;
      margin: 0 20px;
      width: 340px;
      font-size: 0.85rem;
      color: ${contentColor};
    \`;

    const CardLayout = styled.div\`
      position: relative;
      width: 380px;
      height: 200px;
      border: 1px solid #f2f3f5;
      border-radius: ${borderRadius}px;
      box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.2);
      transition: transform 0.5s ease;
      
      display: flex;
      flex-direction: column;   

     :not(:first-child) {
    margin-bottom: 2rem;
    }

    :hover {
      transform: translateY(-0.35em) scale(1.002);
    }
    ::after {
      z-index: -1;
      content: '';
      position: absolute;
      border-radius: ${({ radius }) => `${radius}px`};
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      box-shadow: 0 0.5rem 1rem -0.25em rgba(0, 0, 0, 0.2);
    }
    :hover::after {
      opacity: 1;
    }
    \`;

    const PhotoCardLayout = styled(CardLayout)\`
      height: 390px;
      padding: 0;
      display: grid;
      grid-template-rows: 190px 200px;
    \`;

    
    const Card = () => {
      return (
        <CardLayout>
          <Heading>Heading</Heading>
          <Content>content</Content>
          <CardButton>submit</CardButton>
        </CardLayout>
      )
    }
    
    export default Card;`;

  return codes;
}

const getCode = (base) => {
  let result;
  if (base) {
    result = baseColorListStore.baseColorList.map((item) => ({
      label: item.role,
      hexId: item.hexId,
    }));
  } else {
    result = colorChipListStore.colorList.map((item) => ({
      label: item.label,
      hexId: item.hexId,
    }));
  }

  return result;
};

export const code = (base) => {
  const source = base ? getCode('base') : getCode();
  const name = base ? 'mainColors' : 'allColors';
  let block = `export const ${name} = {`;

  for (let i = 0; i < source.length; i++) {
    block += `
      ${source[i].label}: '${source[i].hexId}',`;
  }

  block += `
  };`;
  return block;
};
