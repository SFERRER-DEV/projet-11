import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

// Le conteneur du slideshow
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

// Un slide
const Slide = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

// La photographie dans le slide
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

// Le conteneur des boutons
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
// Bouton slide précédent <
const Previous = styled.i`
  cursor: pointer;
  user-select: none;
  margin-left: 1em;
  @media (max-width: 767px) {
    margin-left: 0.25em;
  }
`;

// Bouton slide suivant >
const Next = styled.i`
  cursor: pointer;
  user-select: none;
  margin-right: 1em;
  @media (max-width: 767px) {
    margin-right: 0.25em;
  }
`;

function Carousel({ title, photos }) {
  // Le nombre de photos de l'annonce
  const length = photos.length;
  // Current est la photo qui est affichée
  const [current, setCurrent] = useState(0);
  // Obtenir la photo précédente
  const previousPhoto = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  // Obtenir la photo suivante
  const nextPhoto = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  //Il s'agit d'une simple vérification pour s'assurer que le tableau d'images n'est pas vide. S'il est vide, alors le slider ne sera pas rendu. */
  //   if (!Array.isArray(photos) || length <= 0) {
  //     return null;
  //   }

  return (
    // N'afficher les flèches < > que si il y a plusieurs photos
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
            {index === current && <Photo src={photo} alt={`${title}{index}`} />}
          </Slide>
        );
      })}
    </Container>
  );
}

export default Carousel;
