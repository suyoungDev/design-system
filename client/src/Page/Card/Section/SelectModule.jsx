import React from 'react';
import { Row } from '../../../Components/Row';
import chroma from 'chroma-js';
import styled from 'styled-components';
import Select from 'react-select';
import { observer } from 'mobx-react-lite';
import { colorChipListStore } from '../../../Store/ColorListStore';
import { cardColorStore } from '../../../Store/CardColorStore';

const Label = styled.span`
  color: ${(props) => props.theme.ink50};
  font-weight: 200;
  width: 160px;
  display: flex;
  align-items: center;
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
  control: (styles, { selectProps: { width } }) => ({
    ...styles,
    width: width,
  }),
  option: (styles, { data, isSelected, isFocused }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

const SelectModule = observer(({ label, value }) => {
  const setCardColors = (color) => {
    cardColorStore.setCardColor(value, color.color);
  };

  const options = colorChipListStore.colorList.map((item) => ({
    color: item.hexId,
    label: item.title,
  }));

  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary: '#AD9EE5',
      },
    };
  }

  return (
    <Row className='mb-3'>
      <Label>{label}</Label>
      <Select
        placeholder='선택해주세요'
        width='270px'
        options={options}
        styles={colourStyles}
        theme={customTheme}
        isSearchable
        onChange={setCardColors}
      />
    </Row>
  );
});

export default SelectModule;
