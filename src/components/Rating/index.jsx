import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 2em;
  align-items: flex-end;
  font-size: 1.75em;
  border: 1px red dotted;
`;

const StarFull = styled.i`
  color: ${colors.primary};
`;

const StarEmpty = styled.i`
  color: ${colors.tertiary};
  filter: brightness(70%);
`;

function Ratings({ rating }) {
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

export default Ratings;
