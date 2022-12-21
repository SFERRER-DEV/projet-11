import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../utils/style/colors';
import Rating from '../../components/Rating';
import Dropdown from '../../components/Dropdown';

// Le conteneur des deux parties de l'annonce
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

// 1ere partie principale de l'annonce
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

// Coté gauche de la partie principale de l'annonce : titre, localisation, étiquettes
const Detail = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 50%;
  flex-grow: 1;
`;

const Heading = styled.h2`
  width: 100%;
  color: ${colors.primary};
  font-size: 2em;
  font-weight: 500;
`;
const SubHeading = styled.p`
  width: 100%;
  color: ${colors.primary};
  font-size: 1.25em;
  margin: 1em 0;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

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

// Coté à droite de la partie principale de l'annonce : propriétaire et notation
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

// Le portrait et le nom de l'annonceur
const Owner = styled.div`
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

// 2nd partie de l'annonce pour afficher les deux composants Dropdown: Description et Équipements
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

function Accomodation({
  title,
  location,
  name,
  picture,
  description,
  tags,
  equipments,
  rating,
}) {
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
          <Owner>
            <p>{name}</p>
            <img src={picture} alt={`portrait ${name}}`} />
          </Owner>
          <Rating rating={rating} />
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
