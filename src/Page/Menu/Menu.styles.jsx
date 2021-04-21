import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const NavMenu = styled.ul`
  display: flex;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: all 0.5s ease-in-out;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-decoration: none;

  position: fixed;
  top: calc(100vh / 2 - 150px);
  left: 15px;

  text-align: center;
  padding: 1rem 0rem 1rem 0;
`;

export const NavItem = styled.li`
  padding: 0.5rem 1rem;
  :not(:last-child) {
    margin-bottom: 0.2rem;
  }

  .react-icons {
    color: ${(props) => props.theme.ink30};
    :hover {
      color: ${(props) => props.theme.purple50};
    }
  }
`;

export const NavLinkS = styled(LinkScroll)`
  cursor: pointer;
  font-size: 1.8rem;

  :hover {
    .react-icons {
      transform: scale(1.05, 1.05);
      transition: all 0.3s ease;
    }
  }

  &.active {
    .react-icons {
      color: ${(props) => props.theme.purple50};
    }
    transition: all ease-in-out 0.3s;
  }
`;

export const NavContainer = styled.nav`
  z-index: 1;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
