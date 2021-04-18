import styled, { css } from 'styled-components';

export const RadioLabel = styled.label`
  color: ${(props) => props.theme.ink40};
  font-weight: 200;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0.3rem 1rem;
  border-radius: 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckLabel = styled.label`
  width: 25px;
  height: 25px;
  border: 2px solid ${(props) => props.theme.ink50};
  border-radius: 50%;

  .check {
    width: 5px;
    height: 5px;
    background: yellow;
    display: inline-block;
  }
`;

export const Radio = styled.input`
  display: none;
  &:checked + ${RadioLabel} {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.purple20};
    transition: all 0.3s ease;
  }
`;

export const OptionContainer = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 1rem;
  margin-top: 0.5rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px 10px;
  }
`;

const defineStyles = (props) => {
  if (props.slider) return sliderStyles;
};

const sliderStyles = css`
  @media screen and (min-width: 768px) {
    margin-top: 0.8rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  ${defineStyles}
`;
