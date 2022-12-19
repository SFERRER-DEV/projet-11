import { NavLink } from 'react-router-dom';
import colors from './colors';
import styled, { keyframes } from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: ${colors.primary};
  text-transform: uppercase;
  font-size: 1.5em;
  margin: 0 1em;
  text-align: center;
  text-decoration: none;
  text-underline-offset: 0.5em;
  cursor: pointer;
  &.${(props) => props.activeClassName} {
    text-decoration: underline;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: 0.5em solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 5em;
  animation: ${rotate} 1s infinite linear;
  height: 5em;
  width: 5em;
`;
