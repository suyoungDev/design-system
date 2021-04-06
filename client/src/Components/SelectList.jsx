import React from 'react';
import styled from 'styled-components';
import Selection from './Selection';

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
  height: 540px;
  margin: 2rem 0 20px 0;
  overflow: auto;
`;

const SelectList = ({ list, defineCustomColor }) => {
  return (
    <ListStyle>
      {list.map((item) => (
        <Selection
          label={item.label}
          key={item.id}
          defineCustomColor={defineCustomColor}
        />
      ))}
    </ListStyle>
  );
};

export default SelectList;
