import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

/** @const {number} Définir par défaut à 12em la hauteur du paragraphe du composant Dropdown*/
const SIZE_HEIGHT = 12;

// Le conteneur du composant Dropdown
const Container = styled.div`
  width 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5em;
  max-width: 1240px;
  @media (max-width:767px) {
    font-size: 0.85em;
  }
  @media (min-width:768px) {
    font-size: 1em;
  }
  background-color: ${({ size }) =>
    size >= SIZE_HEIGHT ? colors.tertiary : 'transparent'};
  padding-bottom: ${
    /** Quand la Dropdown est fermée alors size = 0 et il ne doit pas y avoir de padding */
    ({ size }) => (size >= SIZE_HEIGHT ? '1em' : '0em')
  };
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
  font-size: 1.5em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media (max-width: 767px) {
    padding: ${
      /** Quand la Dropdown est fermée alors size = 0 et il ne doit pas y avoir de padding */
      ({ size }) => (size === 0 ? '0em' : '0.5em')
    };
    height: ${
      /** Mobile : Si la Dropdown est ouverte alors la hauteur du paragraphe est fit-content */
      ({ size }) => (size === 0 ? '0em' : 'fit-content')
    };
  }
  @media (min-width: 768px) {
    -webkit-line-clamp: 10;
    padding: ${
      /** Quand la Dropdown est fermée alors size = 0 et il ne doit pas y avoir de padding */
      ({ size }) => (size === 0 ? '0em' : '1em')
    };
    height: ${
      /** Desktop : Quand la props height est spécifiée mais < à SIZE_HEIGHT alors la hauteur du paragraphe est fit-content */
      ({ size }) =>
        size === 0
          ? '0em'
          : ({ size }) => (size >= SIZE_HEIGHT ? `${size}em` : 'fit-content')
    };
  }
  white-space: ${
    /** Le texte à afficher peut contenir des sauts de lignes */
    ({ isFlatten }) => (isFlatten ? 'pre' : 'normal')
  };
  transition: height 0.5s ease-in-out, padding 0.5s ease-in-out;
`;

// Le chevron vers le bas (paragraphe fermé) s'anime pour se retourner et s'ouvrir
const Chevron = styled.i`
  transition: transform 0.5s ease-in;
  transform: rotate(${({ rotation }) => rotation}deg);
`;

/**
 * Un composant pour afficher un texte se dépliant (collapse)
 * @param {Object} props
 * @param {string} props.title Le titre affiché dans le composant Dropdown
 * @param {string | Array.<string>} props.description Le texte à afficher est une chaine de caractère ou un tableau de chaines
 * @param {number} props.height La hauteur du composant Dropdown en unité de mesure em
 * @returns {React.ReactElement} Un composant Dropdown
 */
function Dropdown(props) {
  const { title, description, height } = props;
  /** @type {string} Le texte à afficher dans le paragraphe du composant Dropdown */
  let strContent = '';
  /** @type {boolean }  Si la description est un tableau de chaines de caractères alors il a devra être applati. */
  let isFlatten = false;

  // Ceci définit l'état initial du collapse : fermer
  const [active, setActive] = useState(true);
  // La hauteur initiale du paragraphe : masquer
  const [size, setSize] = useState(0);

  if (Array.isArray(description)) {
    // Ce flag est ulisé dans le CSS in JS pour présenter correctement les sauts des lignes
    isFlatten = true;
    // Les éléments du tableau sont joints avec un saut de ligne pour la présentation
    strContent = description.join('\r\n');
  } else {
    // La description est une simple chaine de caractères
    strContent = description;
  }

  /**
   *  Une fonction pour basculer le collapse
   */
  function togglecollapse() {
    setActive(!active);
    // Le paragraphe change de dimension, l'unité de mesure utilisée est le em
    active ? setSize(height) : setSize(0); // La dimension par défaut est SIZE_HEIGHT
  }

  return (
    <Container className="dropdown" size={size}>
      <ButtonTitle onClick={togglecollapse}>
        {title}
        <Chevron rotation={active ? -180 : 0}>
          <FontAwesomeIcon icon={faChevronDown} />
        </Chevron>
      </ButtonTitle>
      <Description isFlatten={isFlatten} size={size}>
        {strContent}
      </Description>
    </Container>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  // La props description est de type chaine de caractères mais peut être aussi un tableau de chaines de caractères(pour les équipements)
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  height: PropTypes.number,
};

Dropdown.defaultProps = {
  // Si aucune valeur est passée en props alors la hauteur utilisée est la valeur de la constante définie au début de ce fichier
  height: SIZE_HEIGHT,
};

export default Dropdown;
