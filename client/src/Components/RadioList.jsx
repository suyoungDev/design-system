import React from 'react';
import styled from 'styled-components';
import Radio from './Radio';

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  height: 150px;
  margin: 2rem 0 20px 0;
  overflow: auto;
  margin-right: ${({ first }) => first && '1.5rem'};
`;

const RadioList = ({ list, ...props }) => {
  return (
    <ListStyle {...props}>
      {list.map((item) => (
        <Radio item={item} key={item.id} {...props} />
      ))}
    </ListStyle>
  );
};

export default RadioList;
