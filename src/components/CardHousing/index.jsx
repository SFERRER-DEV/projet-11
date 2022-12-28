import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

/** @type {Object} Ma HTML Card d'une annonce est contenue dans une balise `<article>` */
const Container = styled.article`
  position: relative;
  margin: 0 auto;
  @media (max-width: 767px) {
    margin: 0.5em;
  }
  transform: scale(1);
  transition-duration: 0.5s;
  &:hover {
    transform: scale(1.05);
    transition-duration: 0.5s;
  }
`;

/** @type {Object} La photo de couverture d'une annonce est dans une balise `<img>` */
const Cover = styled.img`
  width: 100%;
  height: 20em;
  @media (max-width: 767px) {
    height: 12em;
  }
  object-fit: cover;
  border-radius: 0.5em;
  filter: brightness(70%);
`;

/** @type {Object} Le titre d'une annonce est affiché dans une balise `<h2>` */
const Heading = styled.h2`
  z-index: 1;
  position: absolute;
  bottom: 1em;
  padding: 0 1em;
  color: ${colors.secondary};
  font-size: 1.25em;
  font-weight: 500;
`;
/**
 * Affiche une HTML Card avec la photo de couverture et le titre d'une annonce dans un lien hypertexte vers la page de cette annonce
 * @param {Object} props
 * @param {string} props.url L'url de la page de l'annonce
 * @param {string} props.cover L'url de la photo de couverture
 * @param {string} props.title Le titre de l'annonce
 * @param {string} props.alt Le texte alternatif est le titre de l'annonce et sa localisation
 * @returns {React.ReactElement} Un composant CardHousing
 */
function CardHousing(props) {
  const { url, cover, title, alt } = props;
  return (
    <Container>
      <Link to={url}>
        <Cover src={cover} alt={alt} />
        <Heading>{title}</Heading>
      </Link>
    </Container>
  );
}

CardHousing.propTypes = {
  url: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default CardHousing;
