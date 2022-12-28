import { NavLink } from 'react-router-dom';
import colors from './colors';
import styled, { keyframes } from 'styled-components';

export const StyledLink1 = styled(NavLink)`
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

export const StyledLink2 = styled(NavLink)`
  color: ${colors.primary};
  text-align: center;
  text-decoration: none;
  text-underline-offset: 0.5em;
  cursor: pointer;
  &:hover {
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

/** @type {Object} Un conteneur pour afficher et centrer l'animation d'attente lors du chargement des données dans une balise `<div>` */
export const LoaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: center;
  align-content: center;
  height: 15em;
`;

/** @type {Object} Un cercle en rotation est animé dans une balise `<div>` */
export const LoaderHourGlass = styled.div`
  border: 0.5em solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 5em;
  animation: ${rotate} 1s infinite linear;
  height: 5em;
  width: 5em;
`;
