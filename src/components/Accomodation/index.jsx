import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../utils/style/colors';

// Le conteneur de la dropdown
const Container = styled.article`
  padding: 5em;
  width 100%;
  border: 3px red dotted;
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
      <p>{title}</p>
      <p>{location}</p>
      <p>{name}</p>
      <img src={picture} alt={`portrait ${name}}`} />
      <p>{description}</p>
      <ul>
        {tags.map((tag, index) => (
          <li key={`tag-${index}`}>{tag}</li>
        ))}
      </ul>
      <ul>
        {equipments.map((equipement, index) => (
          <li key={`equipement-${index}`}>{equipement}</li>
        ))}
      </ul>
      <p>{rating}</p>
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
