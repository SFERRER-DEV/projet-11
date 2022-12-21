import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { StyledLink2 } from '../../utils/style/Atoms';

// Le conteneur des éléments html de la page
const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  & > a {
    font-size: 1.5em;
    line-height: 2em;
  }
  @media (max-width: 767px) {
    font-size: 0.75em;
  }
`;

// Le titre 404
const Heading = styled.h1`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  height: 5em;
  font-size: 5em;
  line-height: 3em;
  @media (orientation: landscape) and (max-width: 767px) {
    height: 2em;
    line-height: 2em;
  }
  font-weight: 700;
  color: ${colors.primary};
`;

// Sous-titre
const SubHeading = styled.h2`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  font-size: 2em;
  font-weight: 500;
  height: 5em;
  color: ${colors.primary};
`;

function NotFoundPage() {
  return (
    <main>
      <Container>
        <Heading>404</Heading>
        <SubHeading>Oups ! La page que vous demandez n'existe pas.</SubHeading>
        <StyledLink2 to="/">Retourner sur la page d'accueil</StyledLink2>
      </Container>
    </main>
  );
}

export default NotFoundPage;
