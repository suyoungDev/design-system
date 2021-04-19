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
      text-transform: capitalize;
      color: ${headColor};
    \`;

    export const ContextContainer = styled.div\`
      padding: 1rem 1.5rem;
      display: grid;
      grid-gap: 0.5rem;
      grid-template-rows: 0.5fr 1.5fr 1fr;
\`;

    export const ButtonBox = styled.div\`
      display: flex;
      justify-content: center;
      align-items: center;
    \`;

    const CardButton = styled.button\`
      display: block;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 35px;
      border: none;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
      font-weight: 400;
      font-size: 0.8rem;
      letter-spacing: 2px;
      background-color: ${buttonColor};
      color: ${textHex};
      transition: all 0.3s ease;
      text-transform: uppercase;
      :hover {
        background-color: ${hoverColor};
        color: ${hoverText};
      }
    \`;

    const Content = styled.span\`
      width: 340px;
      font-size: 0.85rem;
      color: ${contentColor};
    \`;

    const CardLayout = styled.div\`
      position: relative;
      width: 300px;
      height: auto;
      border: 1px solid #f2f3f5;
      border-radius: ${borderRadius}px;
      box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.1);
      transition: all 0.5s ease;
      will-change: transfrom, opacity;

      :hover {
        transform: translateY(-0.35em);
      }
      ::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: ${borderRadius}px;
        top: 0;
        left: 0;
        opacity: 0;
        box-shadow: 0 0.5rem 1rem -0.25em rgba(0, 0, 0, 0.2);
      }
      :hover {
        ::after {
          opacity: 1;
        }
      }
      @media screen and (min-width: 768px) {
         width: 350px;
      }
    \`;

    const PhotoCardLayout = styled(CardLayout)\`
      height: auto;
      padding: 0;
      display: grid;
      grid-template-rows: 190px auto;
    \`;

    
    const Card = () => {
      return (
        <CardLayout>
          <ContextContainer>
            <Heading>Heading</Heading>
            <Content>content</Content>
            <ButtonBox>
              <CardButton>submit</CardButton>
            </ButtonBox>
          </ContextContainer>
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
  const name = base ? 'mainColors' : 'palette';
  let block = `export const ${name} = {`;

  for (let i = 0; i < source.length; i++) {
    block += `
      ${source[i].label}: '${source[i].hexId}',`;
  }

  block += `
  };`;

  let cssBlock = `:root {`;

  for (let i = 0; i < source.length; i++) {
    cssBlock += `
    --${source[i].label}: ${source[i].hexId};`;
  }

  cssBlock += `
};`;

  let result =
    `// css styles` +
    `
  ` +
    cssBlock +
    `
  
  // styled-components : theme provider styles
  ` +
    block;

  return result;
};
