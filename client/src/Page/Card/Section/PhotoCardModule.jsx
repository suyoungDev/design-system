import React from 'react';
import styled from 'styled-components';
import {
  Heading,
  CardButton,
  PhotoCardLayout,
  Context,
} from './CardModule.styles';
import BGImage from '../../../constance/background.jpg';
import lorem from '../../../lorem';

const { korean, english } = lorem;

const BG = styled.div`
  border-radius: ${({ radius }) => `${radius}px`}
    ${({ radius }) => `${radius}px`} 0 0;
  height: 190px;
  background-image: url(${BGImage});
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
}) => {
  return (
    <PhotoCardLayout radius={radius}>
      <BG radius={radius} />
      <div>
        <Heading headHex={headHex}>
          {language ? korean.heading : english.heading}
        </Heading>
        <Context contentHex={contentHex}>
          {language ? korean.short_content : english.short_content}
        </Context>
        <CardButton
          mainHex={mainHex}
          hoverHex={hoverHex}
          textHex={textHex}
          hoverText={hoverText}
        >
          {language ? korean.button : english.button}
        </CardButton>
      </div>
    </PhotoCardLayout>
  );
};

export default PhotoCardModule;
