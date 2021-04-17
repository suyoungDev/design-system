import React from 'react';
import styled from 'styled-components';

const Arc = styled.div`
  width: 100px;
  height: 100px;
  color: ${(props) => props.theme.purple50};
  font-family: 'Ubuntu', sans-serif;
  overflow: visible;
  position: relative;

  h1 {
    position: absolute;
    top: 20px;
    left: -10px;
  }
  span {
    position: absolute;
    height: 50px;
    width: 10px;
    top: 0;
    left: 0;
    transform-origin: bottom;
  }

  .w0 {
    transform: rotate(-75deg);
  }
  .w1 {
    transform: rotate(-45deg);
  }
  .w2 {
    transform: rotate(-15deg);
  }
  .w3 {
    transform: rotate(15deg);
  }
  .w4 {
    transform: rotate(45deg);
  }
  .w5 {
    transform: rotate(75deg);
  }
  .w6 {
    transform: rotate(105deg);
  }
  .w7 {
    transform: rotate(135deg);
  }
  .w8 {
    transform: rotate(165deg);
  }
  .w9 {
    transform: rotate(195deg);
  }
  .w10 {
    transform: rotate(215deg);
  }
  .w11 {
    transform: rotate(245deg);
  }
`;

const Logo = () => {
  return (
    <Arc>
      <span className='w0'>D</span>
      <span className='w1'>E</span>
      <span className='w2'>S</span>
      <span className='w3'>I</span>
      <span className='w4'>G</span>
      <span className='w5'>N</span>
      <h1>Dd</h1>
      <span className='w6'>S</span>
      <span className='w7'>Y</span>
      <span className='w8'>S</span>
      <span className='w9'>T</span>
      <span className='w10'>E</span>
      <span className='w11'>M</span>
    </Arc>
  );
};

export default Logo;
