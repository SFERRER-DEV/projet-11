import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import React from 'react';

/** @type {Object} Le conteneur des étoiles est une balise `<div>` */
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 2em;
  align-items: flex-end;
  font-size: 1.75em;
`;

/** @type {Object} Une icone étoile pleine est une balise `<i>` */
const StarFull = styled.i`
  color: ${colors.primary};
`;

/** @type {Object} Une icone étoile vide est une balise `<i>` */
const StarEmpty = styled.i`
  color: ${colors.tertiary};
  filter: brightness(70%);
`;

/**
 * Un composant pour afficher une note sur cinq avec des étoiles pleines ou vides
 * @param {Object} props
 * @param {number} props.rating La note de 0 à 5
 * @returns {React.ReactElement} Un composant Ratings
 */

function Ratings(props) {
  const { rating } = props;

  /** @type {Array.<number>} Un tableau des notes possibles (0 à 5) */
  const range = [1, 2, 3, 4, 5];

  return (
    <Container>
      {range.map((element) =>
        rating >= element ? (
          <StarFull key={element.toString()}>
            <FontAwesomeIcon icon={faStar} />
          </StarFull>
        ) : (
          <StarEmpty key={element.toString()}>
            <FontAwesomeIcon icon={faStar} />
          </StarEmpty>
        )
      )}
    </Container>
  );
}

Ratings.propTypes = {
  /** La valeur de la note à afficher de 0 à 5 */
  rating: PropTypes.number.isRequired,
};

Ratings.defaultProps = {
  rating: 0,
};

export default Ratings;
