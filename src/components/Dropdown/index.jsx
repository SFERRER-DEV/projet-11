import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Le conteneur de la dropdown
const Container = styled.div`
  margin-bottom: 1.25em;
  width 100%;
`;

// Le bouton de titre avec son chevron
const ButtonTitle = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: none;
  border-radius: 0.25em;
  color: ${colors.secondary};
  background-color: ${colors.primary};
  cursor: pointer;
  font-size: 1.5em;
  padding: 0.25em 0.5em;
`;

// Le paragraphe à afficher ou à masquer par l'activation du collapse
const Description = styled.p`
  color: ${colors.primary};
  background-color: ${colors.tertiary};
  max-height: ${({ size }) => size}px;
  font-size: 1.5em;
  padding: 1.5em 0.5em;
  overflow: hidden;
  ${({ size }) => (size === 0 ? 'padding: 0;' : 'padding: 1.5em 0.5em;')}
  transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
`;

// Le chevron vers le bas (paragraphe fermé) s'anime pour se retourner (ouvert)
const Chevron = styled.i`
  transition: transform 0.5s ease-in;
  transform: rotate(${({ rotation }) => rotation}deg);
`;

function Dropdown({ title, description }) {
  // Ceci définit l'état initial du collapse.
  const [active, setActive] = useState(true);
  // La hauteur du paragraphe
  const [size, setSize] = useState(0);

  // La fonction qui bascule le collapse
  function togglecollapse() {
    setActive(!active);
    // Le paragraphe change de dimension
    active ? setSize(225) : setSize(0);
  }

  return (
    <Container className="dropdown">
      <ButtonTitle onClick={togglecollapse}>
        <span>{title}</span>
        <Chevron rotation={active ? -180 : 0}>
          <FontAwesomeIcon icon={faChevronDown} />
        </Chevron>
      </ButtonTitle>
      <Description size={size}>{description}</Description>
    </Container>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Dropdown;
