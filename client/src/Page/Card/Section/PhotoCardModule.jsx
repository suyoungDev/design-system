import React from 'react';
import styled from 'styled-components';
import {
  Heading,
  CardButton,
  PhotoCardLayout,
  ButtonBox,
  Context,
  ContextContainer,
} from './CardModule.styles';
import Woman from '../../../constance/woman.jpg';
import lorem from '../../../lorem';

const { korean, english } = lorem;

const BG = styled.div`
  border-radius: ${({ radius }) => `${radius}px`}
    ${({ radius }) => `${radius}px`} 0 0;
  height: 190px;
  background-image: url(${Woman});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const PhotoCardModule = ({
  headHex,
  contentHex,
  mainHex,
  hoverHex,
  textHex,
  language,
  radius,
  hoverText,
  buttonRadius,
}) => {
  return (
    <PhotoCardLayout radius={radius}>
      <BG radius={radius} />
      <ContextContainer>
        <Heading headHex={headHex}>
          {language ? korean.heading : english.heading}
        </Heading>
        <Context contentHex={contentHex}>
          {language ? korean.short_content : english.short_content}
        </Context>
        <ButtonBox>
          <CardButton
            mainHex={mainHex}
            hoverHex={hoverHex}
            textHex={textHex}
            hoverText={hoverText}
            buttonRadius={buttonRadius}
          >
            {language ? korean.button : english.button}
          </CardButton>
        </ButtonBox>
      </ContextContainer>
    </PhotoCardLayout>
  );
};

export default PhotoCardModule;
