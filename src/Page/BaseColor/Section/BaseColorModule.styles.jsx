import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  list-style: none;
`;

export const Title = styled.span`
  font-weight: 400;
  font-size: 0.8rem;
  margin: 0 0.6rem 0 0.7rem;
  color: ${(props) => props.theme.ink50};
  text-transform: capitalize;
  user-select: none;
`;

export const Label = styled.span`
  font-size: ${({ small }) => (small ? '0.5rem' : '0.7rem')};
  font-weight: 200;
  color: ${(props) => props.theme.ink30};
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  text-transform: lowercase;
  user-select: none;
`;

export const Dash = styled.span`
  width: 14px;
  height: 12px;
  border-bottom: 1px solid ${(props) => props.theme.neutral50};
  transform: rotate(90deg);
  user-select: none;
`;
