import React from 'react';
import { Row } from '../../../Components/Row';
import SmallMixin from './SmallMixin';

const SmallMixinList = ({ list, open }) => {
  return (
    <Row>
      {list.map((smallColor, index) => (
        <SmallMixin
          key={`${smallColor}_${index}`}
          smallColor={smallColor}
          index={index}
          open={open}
        />
      ))}
    </Row>
  );
};

export default SmallMixinList;
