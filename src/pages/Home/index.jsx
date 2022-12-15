import PictureBanner from '../../assets/home_banner.png';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

// Le conteneur de la bannière image et titre
const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1240px;
`;

// L'image d'entête mer et falaise
const Banner = styled.img`
  height: 223px;
  width: 100%;
  border-radius: 0.5em;
  object-fit: cover;
  object-position: 50% 20%;
  filter: brightness(70%);
`;

// Le titre
const Heading = styled.h1`
  position: absolute;
  z-index: 100;
  top: 40%;
  width: 100%;
  font-size: 3em;
  font-weight: 500;
  color: ${colors.secondary};
  display: flex;
  justify-content: center;
`;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 5em 15em;
`;

function Home() {
  return (
    <main>
      <Container>
        <Banner src={PictureBanner} alt="banner" />
        <Heading>Chez vous, partout et ailleurs</Heading>
      </Container>
      <Section></Section>
    </main>
  );
}

export default Home;
