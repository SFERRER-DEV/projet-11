import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './colors';

export const StyledLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  font-size: 24px;
  margin: 0 32px;
  text-align: center;
  cursor: pointer;
`;
