import { useState, useEffect } from 'react';
import PictureBanner from '../../assets/home_banner.png';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/Atoms';

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
  background-color: ${colors.tertiary};
  padding: 5em 15em;
  max-width: 1240px;
  border-radius: 0.5em;
  margin: 2em 0;
`;

function Home() {
  const [housingData, setHousingData] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchHousing() {
      setDataLoading(true);
      try {
        const response = await fetch(`/data/logements.json`);
        const { housingData } = await response.json();
        setHousingData(housingData);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setDataLoading(false);
        console.log(housingData);
      }
    }
    fetchHousing();
  }, []);

  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }

  return (
    <main>
      <Container>
        <Banner src={PictureBanner} alt="banner" />
        <Heading>Chez vous, partout et ailleurs</Heading>
      </Container>
      <Section>
        {isDataLoading ? <Loader /> : <h2>Logements: {housingData.length}</h2>}
        {housingData.map((housing, index) => (
          <p style={{ width: '100%' }} key={1000 + index}>
            <h2>{housing.id}</h2>
            <h2>{housing.title}</h2>
          </p>
        ))}
      </Section>
    </main>
  );
}

export default Home;
