import { ABOUT_CONTENTS } from './contents';
import Dropdown from '../../components/Dropdown';
import PictureBanner from '../../assets/about_banner.png';
import styled from 'styled-components';

/** @type {Objet} Le conteneur des 4 composants Dropdown est une `section` */
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

/** @type {Objet} La bannière d'entête est une balise `div` */
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 767px) {
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
`;

/** La photo montagne dans la bannière est une balise `img` */
const Banner = styled.img`
  height: 223px;
  width: 100%;
  object-fit: cover;
  border-radius: 0.5em;
  filter: brightness(85%);
`;

/**
 * Page À propos de avec les 4 engagements Kasa Fiablité, Sécurité, Service, Respect
 * @returns {JSX.Element} La page About
 */
function About() {
  /**@type  {number} Changer la hauteur par défaut du paragraphe dans le composant Dropdown */
  const height = -1;
  return (
    <main>
      <Container>
        <Banner src={PictureBanner} alt="banner" />
      </Container>
      <EngagementsWrapper>
        {ABOUT_CONTENTS.map(({ title, description }, index) => (
          // Ajouter un engagement Kasa dans une paragraghe qui s'ouvre et se referme
          <Dropdown
            key={1000 + index}
            title={title}
            description={description}
            height={height} // -1 < Dropown.SIZE_HEIGHT alors la hauteur sera fit-content
          />
        ))}
      </EngagementsWrapper>
    </main>
  );
}

export default About;
