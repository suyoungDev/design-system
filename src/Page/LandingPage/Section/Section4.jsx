import React from 'react';

import { Dotted } from '../LandingPage.styles';
import SectionTableModule from './SectionTableModule';
import {
  Container,
  GridContainer,
  Center,
  GridLayout,
} from './Section4.styles';

import description from './description';

const Section4 = () => {
  return (
    <Container>
      <Dotted />
      <GridContainer>
        <Center>
          <GridLayout>
            {description.map((item) => (
              <SectionTableModule
                title={item.title}
                content={item.content}
                id={item.id}
              />
            ))}
          </GridLayout>
        </Center>
      </GridContainer>
    </Container>
  );
};

export default Section4;
