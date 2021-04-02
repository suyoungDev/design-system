import React from 'react';
import styled from 'styled-components';
import {
  Heading,
  CardButton,
  PhotoCardLayout,
  Context,
} from './CardModule.styles';
import BGImage from '../../../constance/background.jpg';

const BG = styled.div`
  border-radius: 0.3em 0.3em 0 0;
  height: 190px;
  background-image: url(${BGImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const PhotoCardModule = () => {
  return (
    <PhotoCardLayout>
      <BG />
      <div>
        <Heading>Heading</Heading>
        <Context>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Context>
        <CardButton>Default</CardButton>
      </div>
    </PhotoCardLayout>
  );
};

export default PhotoCardModule;
