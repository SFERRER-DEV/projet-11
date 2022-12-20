import styled from 'styled-components';
import colors from '../../utils/style/colors';

// Le conteneur de la dropdown
const Container = styled.article`
  padding: 5em;
  width 100%;
  border: 3px red dotted;
`;

function Accomodation({ name, location }) {
  return (
    <Container>
      <p>{name}</p>
      <p>{location}</p>
    </Container>
  );
}

export default Accomodation;
