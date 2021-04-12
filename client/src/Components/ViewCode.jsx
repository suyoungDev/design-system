import React, { useCallback } from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';
import { observer } from 'mobx-react-lite';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { IoMdCopy } from 'react-icons/io';
import { SmallButton } from '../Components/Button';
import { colorChipListStore } from '../Store/ColorListStore';
import { baseColorListStore } from '../Store/BaseColorStore';
import { cardColorStore } from '../Store/CardColorStore';
import useCopy from '../Hook/useCopy';

const CopyButton = styled(SmallButton)`
  position: absolute;
  top: 0px;
  right: 10px;
`;

const Container = styled.div`
  font-size: 14px;
  width: 540px;
  margin-bottom: 1rem;
  position: relative;
`;

const ViewCode = observer(({ isOpen, base, card }) => {
  const cardCode = () => {
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
      hoverColor && chroma.contrast(hoverColor, 'white') > 2
        ? 'white'
        : 'black';

    const codes = `
    import styled from 'styled-components';

    const Heading = styled.h2\`
      font-size: 28px;
      font-weight: 400;
      margin: 15px 20px;
      display: flex;
      align-items: center;
      color: ${headColor};
      text-transform: capitalize;
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

    const Context = styled.span\`
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

      display: flex;
      flex-direction: column;

      :not(:first-child) {
        margin-bottom: 2rem;
      }

      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;

      :hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }
    \`;

    const PhotoCardLayout = styled(CardLayout)\`
      height: 390px;
      padding: 0;
      display: grid;
      grid-template-rows: 190px 200px;
    \`;


    <CardLayout>
      <Heading>Heading</Heading>
      <Context>content</Context>
      <CardButton>submit</CardButton>
    </CardLayout>
    `;

    return codes;
  };

  const getCode = useCallback(() => {
    let result;
    if (base) {
      result = baseColorListStore.baseColorList.map((item) => ({
        label: item.role.toLowerCase(),
        hexId: item.hexId,
      }));
    } else {
      result = colorChipListStore.colorList.map((item) => ({
        label: item.label.toLowerCase(),
        hexId: item.hexId,
      }));
    }

    return result;
  }, [base]);

  const code = useCallback(() => {
    const source = getCode();
    const name = base ? 'mainColors' : 'allColors';
    let block = `export const ${name} = {`;

    for (let i = 0; i < source.length; i++) {
      block += `
      ${source[i].label}: '${source[i].hexId}',`;
    }

    block += `
  };`;
    return block;
  }, [getCode, base]);

  const [copy] = useCopy();

  const codeBlock = card ? cardCode() : code();

  return (
    <div>
      {isOpen && (
        <Container>
          <SyntaxHighlighter
            language='javascript'
            style={githubGist}
            wrapLines={true}
            wrapLongLines={true}
          >
            {codeBlock}
          </SyntaxHighlighter>
          <CopyButton narrow onClick={() => copy(codeBlock)}>
            <IoMdCopy />
          </CopyButton>
        </Container>
      )}
    </div>
  );
});

export default ViewCode;
