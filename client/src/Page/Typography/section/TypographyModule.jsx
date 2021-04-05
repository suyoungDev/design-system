import React from 'react';
import styled from 'styled-components';
import { Column } from '../../../Components/Column';
import { Row } from '../../../Components/Row';

const TypographyWrapper = styled.div`
  color: ${(props) => props.hexId};
  width: 400px;

  h1 {
    font-weight: bold;
    margin-right: 1.5rem;
  }

  h3 {
    font-weight: 400;
  }

  p {
    margin-top: 0.4rem;
    line-height: 1.2rem;
    font-size: 0.8rem;
    font-weight: 300;
  }
`;

const TypographyModule = ({ hexId }) => {
  return (
    <TypographyWrapper hexId={hexId}>
      <Row>
        <h1>Aa</h1>
        <Column>
          <h3>Ink {hexId}</h3>
          <p>
            법원은 최고법원인 대법원과 각급법원으로 조직된다. 대한민국은 통일을
            지향하며, 자유민주적 기본질서에 입각한 평화적 통일 정책을 수립하고
            이를 추진한다.
          </p>
        </Column>
      </Row>
    </TypographyWrapper>
  );
};

export default TypographyModule;
