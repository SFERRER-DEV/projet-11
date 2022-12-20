import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  color: ${colors.secondary};
`;

const Slide = styled.div`
  display: flex;
`;

const Photo = styled.img`
  object-fit: cover;
  border-radius: 0.5em;
  height: 415px;
  width: 1240px;
`;

const Previous = styled.i`
  position: absolute;
  z-index: 99;
  cursor: pointer;
  left: 4em;
  user-select: none;
`;
//top: 10em;
const Next = styled.i`
  position: absolute;
  z-index: 99;
  cursor: pointer;
  right: 4em;
  user-select: none;
`;
// top: 10em;

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
