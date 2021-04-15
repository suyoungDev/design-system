import React from 'react';
import { DiGithubAlt } from 'react-icons/di';
import { Container, WrapperBottom, WrapperUp } from './Footer.styles';
import { Dotted } from '../LandingPage/LandingPage.styles';

const Footer = () => {
  return (
    <Container>
      <Dotted />
      <WrapperUp>
        <h2>design and Code By</h2>
        <span>poked.by.mocha@gmail.com</span>
        <div>
          <a
            href='https://github.com/mochapoke'
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
      </WrapperBottom>
    </Container>
  );
};

export default Footer;
