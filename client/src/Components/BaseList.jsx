import React from 'react';
import styled from 'styled-components';
import Base from './Base';

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
  height: 540px;
  margin: 2rem 0 20px 0;
  overflow: auto;
`;

const BaseList = ({ list }) => {
  return (
    <ListStyle>
      {list.map((item) => (
        <Base label={item.label} key={item.id} />
      ))}
    </ListStyle>
  );
};

export default BaseList;
