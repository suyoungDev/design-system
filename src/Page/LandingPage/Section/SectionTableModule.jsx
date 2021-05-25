import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Title, Content } from './Section4.styles.jsx';

const SectionTableModule = ({ title, content }) => {
  return (
    <>
      <Title>
        <AiOutlineArrowRight />
        <span>{title}</span>
      </Title>
      <Content>
        <p>{content}</p>
      </Content>
    </>
  );
};

export default SectionTableModule;
