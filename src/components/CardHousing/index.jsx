import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  transform: scale(1);
  transition-duration: 0.5s;
  width: 20em;
  &:hover {
    transform: scale(1.05);
    transition-duration: 0.5s;
  }
`;

const Cover = styled.img`
  width: 100%;
  height: 20em;
  object-fit: cover;
  border-radius: 0.5em;
  filter: brightness(70%);
`;

const Heading = styled.h2`
  z-index: 1;
  position: absolute;
  bottom: 1em;
  padding: 0 1em;
  color: ${colors.secondary};
  font-size: 1.25em;
  font-weight: 500;
`;

function CardHousing(props) {
  return (
    <Container>
      <Link to={props.link}>
        <Cover src={props.cover} alt={props.alt} />
        <Heading>{props.title}</Heading>
      </Link>
    </Container>
  );
}

export default CardHousing;
