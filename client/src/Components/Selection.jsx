import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Row } from './Row';
import Select from 'react-select';
import { colorChipListStore } from '../Store/ColorListStore';
import chroma from 'chroma-js';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.4rem;
  font-weight: 300;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: ${(props) => props.theme.ink40};
  transition: all 0.3s ease;
  border-bottom: 1px solid ${(props) => props.theme.neutral50};
  font-size: 15px;
`;

const Container = styled.div`
  width: 100%;

  :not(:first-child) {
    margin-top: 0.3rem;
  }
`;

const SelectContainer = styled.div`
  width: 200px;
`;

const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const Selection = ({ label, defineCustomColor }) => {
  const [selected, setSelected] = useState({});
  const [data, setData] = useState({});

  useEffect(() => {
    const value = colorChipListStore.colorList.map((item) => ({
      label: item.title,
      value: item.title,
      hexId: item.hexId,
      id: item.id,
    }));

    setData(value);

    if (selected.label) {
      const data = {
        hexId: selected.hexId,
        label: selected.label,
        role: label,
      };
      defineCustomColor((prev) => [...prev, data]);
    }
    // eslint-disable-next-line
  }, [selected]);

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.hexId);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? data.hexId
          : isFocused
          ? color.alpha(0.1).css()
          : null,
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.hexId,
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          backgroundColor:
            !isDisabled && (isSelected ? data.hexId : color.alpha(0.3).css()),
        },
      };
    },
    input: (styles) => ({ ...styles, ...dot() }),
    placeholder: (styles) => ({ ...styles, ...dot() }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.hexId) }),
  };

  return (
    <Container>
      <Wrapper>
        <Row className='jc_sb al_ct'>
          <span>{label}</span>
          <SelectContainer>
            <Select
              defaultValue={data}
              options={data}
              label='single select'
              value={selected}
              onChange={setSelected}
              styles={colourStyles}
              isSearchable
            />
          </SelectContainer>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default Selection;
