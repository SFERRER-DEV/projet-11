import PictureBanner from '../../assets/about_banner.png';
import styled from 'styled-components';
import { ABOUT_CONTENTS } from './contents';
import Dropdown from '../../components/Dropdown';

// Les 4 engagements Kasa Fiablité, Sécurité, Service, Respect.
const EngagementsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2em;

  @media (max-width: 767px) {
    padding: 0.5em;
    margin-top: 0.5em;
  }

  @media (max-width: 767px) {
    & .dropdown {
      width: 100%;
    }
    & .dropdown > p,
    button {
      font-size: 1.5em;
    }
  }
  @media (min-width: 768px) {
    & .dropdown {
      width: 85%;
    }
  }
`;

// La bannière
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 767px) {
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
`;

// L'image d'entête montagne
const Banner = styled.img`
  height: 223px;
  width: 100%;
  object-fit: cover;
  border-radius: 0.5em;
  filter: brightness(85%);
`;

function About() {
  // Changer la hauteur par défaut du paragraphe dans le composant Dropown : -1 < Dropown.SIZE_HEIGHT  implique la hauteur sera fit-content
  const height = -1;
  return (
    <main>
      <Container>
        <Banner src={PictureBanner} alt="banner" />
      </Container>
      <EngagementsWrapper>
        {/* Le contenu des engagements à afficher est stocké dans un tableau JS */}
        {ABOUT_CONTENTS.map(({ title, description }, index) => (
          // Ajouter un engagement Kasa dans une paragraghe qui s'ouvre et se referme
          <Dropdown
            key={1000 + index}
            title={title}
            description={description}
            height={height}
          />
        ))}
      </EngagementsWrapper>
    </main>
  );
}

export default About;
