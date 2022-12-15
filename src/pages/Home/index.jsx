import PictureBanner from '../../assets/home_banner.png';
import styled from 'styled-components';

// L'image d'entête montagne
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Banner = styled.img`
  height: 223px;
  border-radius: 25px;
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
      </Container>
      <Section>
        <h1>Home</h1>
      </Section>
    </main>
  );
}

export default Home;
