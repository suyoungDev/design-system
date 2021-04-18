import React, { useEffect, useState } from 'react';
import chroma from 'chroma-js';
import Select from 'react-select';
import { observer } from 'mobx-react-lite';

import { Label } from '../../../Components/Label';
import { colorChipListStore } from '../../../Store/ColorListStore';
import { cardColorStore } from '../../../Store/CardColorStore';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-bottom: 0.8rem;
  }
`;

const OptionWrapper = styled.div`
  margin: 0.4rem 0 0.8rem 0;

  @media screen and (min-width: 768px) {
    width: 100%;
    margin: 0;
  }
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
  const [isReEnter, setIsReEnter] = useState(false);
  const [storedIndex, setStoredIndex] = useState();

  const options = colorChipListStore.colorList.map((item) => ({
    color: item.hexId,
    label: item.label,
  }));

  useEffect(() => {
    const storeValue = cardColorStore[value];
    if (storeValue) setIsReEnter(true);
    for (let i = 0; i < options.length; i++) {
      if (options[i].color === storeValue) {
        setStoredIndex(i);
      }
    }
  }, [value, options]);

  const setCardColors = (color) => {
    cardColorStore.setCardColor(value, color.color);
  };

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
    <Container>
      {label && <Label card>{label}</Label>}
      <OptionWrapper>
        {!isReEnter && (
          <Select
            placeholder='선택해주세요'
            width='100%'
            options={options}
            styles={colourStyles}
            theme={customTheme}
            isSearchable
            onChange={setCardColors}
          />
        )}
        {isReEnter && (
          <Select
            width='100%'
            options={options}
            styles={colourStyles}
            theme={customTheme}
            isSearchable
            onChange={setCardColors}
            defaultValue={options[storedIndex]}
          />
        )}
      </OptionWrapper>
    </Container>
  );
});

export default SelectModule;
