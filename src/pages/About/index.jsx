import PictureBanner from '../../assets/about_banner.png';
import styled from 'styled-components';
import { ABOUT_CONTENTS } from './contents';
import Dropdown from '../../components/Dropdown';

// L'image d'entête montagne
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Banner = styled.img`
  height: 223px;
  border-radius: 0.5em;
`;

// Les 4 engagements Kasa : Fiablité, Sécurité, Service, Respect.
const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 5em 15em;
`;

function About() {
  return (
    <main>
      <Container>
        <Banner src={PictureBanner} alt="banner" />
      </Container>
      <Section>
        {/* Le contenu des engagements à afficher est stocké dans un tableau JS */}
        {ABOUT_CONTENTS.map(({ title, description }, index) => (
          // Ajouter un engagement Kasa dans une paragraghe qui s'ouvre et se referme
          <Dropdown
            key={1000 + index}
            title={title}
            description={description}
          />
        ))}
      </Section>
    </main>
  );
}

export default About;
