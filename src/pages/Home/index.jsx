import React, { useState, useEffect, useContext } from 'react';
import PictureBanner from '../../assets/home_banner.png';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/Atoms';
import CardHousing from '../../components/CardHousing';
import { HousingContext } from '../../utils/context';

// Le conteneur de la bannière image avec titre
const Container = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
`;

// L'image d'entête océan et falaises
const Banner = styled.img`
  height: 223px;
  max-width: 1236px;
  width: 100%;
  border-radius: 0.5em;
  object-fit: cover;
  object-position: 50% 20%;
  filter: brightness(70%);
  margin-auto: 0 auto;
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

// Le sablier d'attente pour le chargement des données
const LoaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  height: 15em;
`;

// La partie contenant toutes les html cards des logements
const CardWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 3em;
  column-gap: 3em;
  width: 100%;
  background-color: ${colors.tertiary};
  padding: 4em 3em;
  max-width: 1240px;
  border-radius: 0.5em;
  margin: 2em auto;
`;

function Home() {
  // Le provider du contexte de données est placé au niveau du routage
  const { isDataLoading, housingData, error } = useContext(HousingContext);
  // Permet d'afficher l'animation lors du chargement des données
  const [seconds, setSeconds] = useState(1); // 1s
  // Temporiser avant d'afficher les logements pour voir le sablier
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  if (error) {
    return (
      <div style={{ fontSize: '2em', margin: '2em 0', padding: '1em' }}>
        Oups il y a eu un problème
      </div>
    );
  }

  return (
    <main>
      <Container>
        <Banner src={PictureBanner} alt="banner" />
        <Heading>Chez vous, partout et ailleurs</Heading>
      </Container>
      {seconds > 0 || isDataLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardWrapper>
          {housingData.map((housing, index) => (
            <CardHousing
              key={housing.id}
              link={`/housing/${housing.id}`}
              title={housing.title}
              alt={`${housing.host.name} - ${housing.location}`}
              cover={housing.cover}
            />
          ))}
        </CardWrapper>
      )}
    </main>
  );
}

export default Home;
