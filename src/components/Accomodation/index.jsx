import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../utils/style/colors';
import Rating from '../../components/Rating';
import Dropdown from '../../components/Dropdown';

// Le conteneur des deux parties de l'annonce
const Container = styled.article`
  padding: 5em;
  width 100%;
  display: flex;
  display-direction: column;
  flex-wrap: wrap;
`;

// 1ere partie principale de l'annonce
const Informations = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  border: 3px blue dotted;
`;

// Coté gauche de la partie principale de l'annonce : titre, localisation, étiquettes
const Detail = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 50%;
  flex-grow: 1;
  max-width: 75%;
  border: 3px red dotted;
`;

const Heading = styled.h2`
  width: 100%;
  color: ${colors.primary};
  font-size: 2.25em;
  font-weight: 500;
  border: 1px red dotted;
`;
const SubHeading = styled.p`
  width: 100%;
  color: ${colors.primary};
  font-size: 1.25em;
  margin: 1em 0;
  border: 1px red dotted;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 2.5em;
  align-items: center;
  border: 1px blue dotted;
`;

const Tag = styled.p`
  width: fit-content;
  flex-grow: 0;
  flex-shrink: 0;
  height: 2em;
  min-width: 7em;
  max-width: 15em;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  font-size: 1em;
  line-height: 1em;
  text-align: center;
  margin: 0.25em;
  padding: 0.5em 0.25em;
  border-radius: 0.5em;
  border: 1px red dotted;
`;

// Coté à droite de la partie principale de l'annonce : propriétaire et notation
const Wrapper = styled.div`
  flex-basis: 50%;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  border: 3px red dotted;
`;

const Owner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  border: 1px blue dotted;
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
    max-width: 4em;
    border: 1px red dotted;
  }
`;

// 2nd partie de l'annonce pour afficher les deux composants Dropdown: Description et Équipements
const Complement = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  justify-content: space-between;
  column-gap: 3em;
  & p {
    font-size: 1.5em;
  }
  border: 3px blue dotted;
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
    <Container>
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
