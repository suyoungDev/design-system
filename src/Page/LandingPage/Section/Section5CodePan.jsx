import React from 'react';
import { GridColumn, BgBox, GridRow } from './Section5.styles';

import CodePanCodeBlock from './CodePanCodeBlock';
import CodePanWindow from './CodePanWindow';
import CodePanBrowser from './CodePanBrowser';

const Section5CodePan = () => {
  return (
    <GridColumn>
      <BgBox>
        <GridRow>
          <CodePanWindow />
          <CodePanBrowser />
          <CodePanCodeBlock />
        </GridRow>
      </BgBox>
    </GridColumn>
  );
};

export default Section5CodePan;
