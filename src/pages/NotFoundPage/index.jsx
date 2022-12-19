import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { StyledLink } from '../../utils/style/Atoms';

// Le conteneur des éléments html de la page
const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5em 15em;
`;

// Le titre 404
const Heading = styled.h1`
  font-size: 5em;
  font-weight: 700;
  text-align: center;
  color: ${colors.primary};
`;

// Sous-titre
const SubHeading = styled.h2`
  font-size: 2em;
  font-weight: 500;
  margin: 1em 0;
  display: flex;
  justify-content: center;
  color: ${colors.primary};
`;

function NotFoundPage() {
  return (
    <Container>
      <Heading>404</Heading>
      <SubHeading>La page que vous demandez n'existe pas.</SubHeading>
      <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
    </Container>
  );
}

export default NotFoundPage;
