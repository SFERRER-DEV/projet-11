import { Link } from 'react-router-dom';
import colors from './colors';
import styled, { keyframes } from 'styled-components';

export const StyledLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  font-size: 24px;
  margin: 0 32px;
  text-align: center;
  cursor: pointer;
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
