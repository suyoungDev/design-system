import styled from 'styled-components';

export const Wrapper = styled.li`
  padding: 0.5rem 0.7rem;
  width: 100%;
  list-style: none;
  .react-icons {
    color: ${(props) => props.theme.ink30};
    cursor: pointer;
    :not(:last-child) {
      margin-right: 0.5rem;
    }
    :hover {
      color: ${(props) => props.theme.purple50};
    }
    transition: all 0.3s ease;
  }
`;

export const Title = styled.span`
  font-weight: 400;
  font-size: 0.8rem;
  margin: 0 0.6rem 0.2rem 0;
  color: ${(props) => props.theme.ink50};
  text-transform: capitalize;
  user-select: none;
`;

export const Label = styled.span`
  font-size: ${({ small }) => (small ? '0.5rem' : '0.7rem')};
  font-weight: 200;
  color: ${(props) => props.theme.neutral70};
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
