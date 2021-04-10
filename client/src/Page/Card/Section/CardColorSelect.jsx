import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { colorChipListStore } from '../../../Store/ColorListStore';
import chroma from 'chroma-js';
import { observer } from 'mobx-react-lite';

const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.neutral40};
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.neutral50};
  border-top: 1px solid ${(props) => props.theme.neutral50};
`;

const dot = (color = '#ccc') => ({
  display: 'flex',
  alignItems: 'center',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 10,
    height: 15,
    width: 15,
  },
});

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor:
          !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

const CardColorSelect = observer(({ isOpen, setCardColorList }) => {
  const options = colorChipListStore.colorList.map((item) => ({
    color: item.hexId,
    label: item.title,
  }));

  return (
    <>
      {isOpen && (
        <Container>
          <p>main</p>
          <div style={{ width: '200px' }}>
            <Select
              defaultValue={options[0]}
              options={options}
              styles={colourStyles}
              isSearchable
            />
          </div>
        </Container>
      )}
    </>
  );
});

export default CardColorSelect;
