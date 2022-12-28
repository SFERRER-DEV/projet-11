import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

/** @type {Object} Le conteneur du slideshow est une balise `<section>` */
const Container = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  color: ${colors.secondary};
  @media (max-width: 767px) {
    padding: 0 0.5em;
    font-size: 1.8em;
  }
`;

/** @type {Object} Un slide est une balise `<div>` visible ou à masquer */
const Slide = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

/** @type {Object} Une image `<img>` pour afficher une photo de l'annonce */
const Photo = styled.img`
  object-fit: cover;
  border-radius: 0.5em;
  height: 415px;
  @media (max-width: 767px) {
    height: 255px;
  }
  max-width: 1240px;
  width: 100%;
`;

/** @type {Object} Le conteneur des boutons < et > est une balise `<div>` */
const Wrapper = styled.div`
  position: absolute;
  z-index: 99;
  width: 100%;
  max-width: 1240px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  @media (max-width: 767px) {
    padding: 0 0.5em;
  }
`;

/** @type {Object} L'icone chevron gauche dans une balise `<i>` pour afficher le slide précédent */
const Previous = styled.i`
  cursor: pointer;
  user-select: none;
  margin-left: 1em;
  @media (max-width: 767px) {
    margin-left: 0.25em;
  }
`;

/** @type {Object} L'icone chevron droit dans une balise `<i>` pour afficher le slide suivant */
const Next = styled.i`
  cursor: pointer;
  user-select: none;
  margin-right: 1em;
  @media (max-width: 767px) {
    margin-right: 0.25em;
  }
`;

/**
 * Un composant pour afficher un diaporama de photos à faire défiler
 * @param {Object} props
 * @param {string} props.title Le titre de l'annonce utilisé pour l'attribut alt
 * @param {Array.<string>} props.photos Un tableau contenant les urls des photos
 * @returns {React.ReactElement | null} Le composant Carousel
 */
function Carousel(props) {
  const { title, photos } = props;

  /** @type {number} Le nombre de photos de l'annonce */
  const length = photos.length;
  // Current est la photo qui est affichée
  const [current, setCurrent] = useState(0);
  /**
   * Obtenir la photo précédente
   */
  const previousPhoto = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  /**
   * Obtenir la photo suivante
   */
  const nextPhoto = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // Si il n'y a pas de photo ne pas rendre ce composant
  if (!Array.isArray(photos) || length <= 0) {
    return null;
  }

  return (
    // N'afficher les boutons < > que si il y a des photos
    <Container className="carousel">
      <Wrapper>
        {length > 1 ? (
          <Previous onClick={previousPhoto} alt="Precedent">
            <FontAwesomeIcon icon={faChevronLeft} />
          </Previous>
        ) : null}
        {length > 1 ? (
          <Next onClick={nextPhoto} alt="Suivant">
            <FontAwesomeIcon icon={faChevronRight} />
          </Next>
        ) : null}
      </Wrapper>
      {photos.map((photo, index) => {
        return (
          <Slide key={`carousel-${index}`}>
            {index === current && (
              <Photo src={photo} alt={`${title} photo ${index}`} />
            )}
          </Slide>
        );
      })}
    </Container>
  );
}

Carousel.propTypes = {
  title: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
