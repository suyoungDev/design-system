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
  border-radius: 0.3em 0.3em 0 0;
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
}) => {
  return (
    <PhotoCardLayout>
      <BG />
      <div>
        <Heading headHex={headHex}>
          {language ? korean.heading : english.heading}
        </Heading>
        <Context contentHex={contentHex}>
          {language ? korean.short_content : english.short_content}
        </Context>
        <CardButton mainHex={mainHex} hoverHex={hoverHex} textHex={textHex}>
          {language ? korean.button : english.button}
        </CardButton>
      </div>
    </PhotoCardLayout>
  );
};

export default PhotoCardModule;
