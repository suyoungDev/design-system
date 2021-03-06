import React, { useState } from 'react';
import { DiGithubAlt } from 'react-icons/di';
import { BsArrowUpShort, BsArrowUp } from 'react-icons/bs';
import { Container, WrapperBottom, WrapperUp } from './Footer.styles';
import { Dotted } from '../LandingPage/LandingPage.styles';
import { ButtonToTop } from '../../Components/Button';
import { animateScroll } from 'react-scroll';

const Footer = () => {
  const [isHover, setIsHover] = useState(false);
  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <Container>
      <Dotted />
      <WrapperUp>
        <h2>design and Code By</h2>
        <span>poked.by.mocha@gmail.com</span>
        <div>
          <a
            href='https://github.com/suyoungDev'
            target='_blank'
            rel='noreferrer'
            title='깃허브로 이동'
          >
            <DiGithubAlt />
          </a>
        </div>
      </WrapperUp>
      <WrapperBottom>
        <p>side project 2021</p>
        <ButtonToTop
          title='위로 가기'
          secondary
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
          onClick={scrollTop}
        >
          <span>위로 가기</span>
          {isHover ? <BsArrowUp /> : <BsArrowUpShort />}
        </ButtonToTop>
      </WrapperBottom>
    </Container>
  );
};

export default Footer;
