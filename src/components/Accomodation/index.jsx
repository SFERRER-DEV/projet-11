import PropTypes from 'prop-types';
import Ratings from '../Ratings';
import Dropdown from '../../components/Dropdown';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

/** @type {Object} Le conteneur des deux parties de l'annonce est une balise `<article>` */
const Container = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width 100%;
  max-width: 1240px;
  margin-top: 2em;
  margin-bottom: 1em;
  @media (max-width: 767px) {
    padding: 0 0.5em;
    font-size: 0.75em;
  }
`;

/** @type {Object} La première partie de l'annonce est une balise `<div>` */
const Informations = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 767px) {
    flex-direction: column;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
  flex-wrap: nowrap;
  width: 100%;
`;

/** @type {Object} Le coté gauche de la partie principale est une balise `<div>` qui affiche le titre, la localisation et des étiquettes*/
const Detail = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 50%;
  flex-grow: 1;
`;

/** @type {Object} Le titre de l'annonce est une balise `<h2>` */
const Heading = styled.h2`
  width: 100%;
  color: ${colors.primary};
  font-size: 2em;
  font-weight: 500;
`;

/** @type {Object} Le sous-titre de l'annonce est une balise `<p>` qui affiche la localisation */
const SubHeading = styled.p`
  width: 100%;
  color: ${colors.primary};
  font-size: 1.25em;
  margin: 1em 0;
`;

/** @type {Object} Les étiquettes de l'annonce sont contenues dans une balise `<div>` */
const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

/** @type {Object} Une étiquette est un ou des mots dans une balise `<p>` */
const Tag = styled.p`
  display: -webkit-box;
  flex-grow: 0;
  flex-shrink: 0;
  line-height: 2em;
  font-size: 1.125em;
  text-align: center;
  min-width: 7em;
  max-width: 15em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  margin: 0.25em;
  border-radius: 0.5em;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

/** @type {Object} Le coté droit de la partie principale est une balise `<div>` qui affiche le portrait, le nom de l'hôte ainsi que sa note dans un composant Ratings */
const Wrapper = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: row-reverse;
    align-items: center;
  }
  @media (min-width: 768px) {
    flex-direction: column;
  }
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  flex-basis: 30%;
  flex-shrink: 1;
  flex-grow: 0;
  margin: 0.5em 0;
`;

/** @type {Object} Le conteneur du portrait et du nom de l'hôte est une balise `<div>` */
const Host = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  width: 12em;
  & > img {
    height: 5em;
    width: 5em;
    border-radius: 100%;
  }
  & > p {
    margin-right: 1em;
    color: ${colors.primary};
    font-size: 1.125em;
    font-weight: 500;
    text-align: end;
    word-wrap: break-word;
    width: auto;
    word-spacing: 4em;
  }
`;

/** @type {Object} La seconde partie de l'annonce est une balise `<div>` qui affiche deux composants Dropdown pour la description et les équipements */
const Complement = styled.div`
  @media (max-width: 767px) {
    flex-direction: column;
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 49%);
    column-gap: 2%;
  }
  margin-top: 1em;
`;
/**
 * Un composant pour afficher les informations de texte d'une annonce avec le portrait et la note de l'annonceur
 * @param {Object} props
 * @param {string} props.title Le titre de l'annonce
 * @param {string} props.location La localisation de l'annonce
 * @param {string} props.name Le nom de l'hôte
 * @param {string} props.picture L'url de lu protrait de l'hôte
 * @param {string} props.description La description de l'annonce qui sera affiché avec un composant Dropdown
 * @param {Array.<string>} props.tags Un tableau d'étiquettes de texte
 * @param {Array.<string>} props.equipments Un tableau des équipements de l'annonce qui seront affichés avec un composant Dropdown
 * @param {number} props.rating La note sur 5 qui sera affichée avec un composant Ratings
 * @returns {React.ReactElement} Un composant Accomodation
 */
function Accomodation(props) {
  const {
    title,
    location,
    name,
    picture,
    description,
    tags,
    equipments,
    rating,
  } = props;

  return (
    <Container className="accomodation">
      <Informations>
        <Detail>
          <Heading>{title}</Heading>
          <SubHeading>{location}</SubHeading>
          <Tags>
            {tags.map((tag, index) => (
              <Tag key={`tag-${index}`}>{tag}</Tag>
            ))}
          </Tags>
        </Detail>
        <Wrapper>
          <Host>
            <p>{name}</p>
            <img src={picture} alt={`portrait de l'hôte ${name}}`} />
          </Host>
          <Ratings rating={rating} />
        </Wrapper>
      </Informations>
      <Complement>
        <Dropdown key={1001} title="Description" description={description} />
        <Dropdown key={1002} title="Équipements" description={equipments} />
      </Complement>
    </Container>
  );
}

Accomodation.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string,
  rating: PropTypes.number,
  equipments: PropTypes.arrayOf(PropTypes.string),
  tags: PropTypes.arrayOf(PropTypes.string),
};

Accomodation.defaultProps = {
  equipments: [''],
  tags: [''],
  rating: 0,
};

export default Accomodation;
