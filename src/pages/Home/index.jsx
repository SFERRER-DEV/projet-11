import React, { useState, useEffect, useContext } from 'react';
import PictureBanner from '../../assets/home_banner.png';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import CardHousing from '../../components/CardHousing';
import { HousingContext } from '../../utils/context';
import { LoaderWrapper, LoaderHourGlass } from '../../utils/style/Atoms';

/** @type {Objet} Le conteneur de la bannière image et du titre de la page est une balise `section` */
const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  row-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

/** @type {Objet} La photo de paysage de l'entête de la page est dans une balise `<img>` */
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

/** @type {Objet}  Le titre de la page est dans une balise `<h1>` */
const Heading = styled.h1`
  position: absolute;
  z-index: 100;
  max-width: 1240px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 3em;
  @media (max-width: 767px) {
    font-size: 2em;
  }
  font-weight: 500;
  color: ${colors.secondary};
  padding: 0 1em;
`;

/** @type {Objet} Toutes les HTML Cards des annonces sont contenues dans une balise `<section>` */
const CardWrapper = styled.section`
  margin: 2em auto;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 1em 0.5em;
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 2em 1em;
    row-gap: 1em;
    column-gap: 1em;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 4em 3em;
    row-gap: 3em;
    column-gap: 3em;
  }
  width: 100%;
  max-width: 1240px;
  border-radius: 0.5em;
  background-color: ${colors.tertiary};
`;

/**
 * Page d'accueil avec les annonces de logements dans des HTML Cards
 * @returns {JSX.Element} La page Home
 */
function Home() {
  /**
   * @typedef {Object} contextData
   * @property  {boolean} isDataLoading Les données sont-elle entrain de se charger ?
   * @property {Array.<{id: string, title: string, location: string, cover: string}>} housingData Un tableau d'objets JSON
   * @property  {boolean} error Est-ce qu'une erreur est survenue lors du chargement ?
   */
  /** @type {contextData} */
  const { isDataLoading, housingData, error } = useContext(HousingContext);

  /**
   * @typedef {number} seconds Nombre de seconde(s) à attendre
   */
  const [
    /** @type {seconds} */
    seconds,
    setSeconds,
  ] = useState(1); // 1s
  /**
   * Temporiser avant d'afficher les logements pour voir le sablier
   */
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
      {isDataLoading || seconds > 0 ? (
        <LoaderWrapper>
          <LoaderHourGlass />
        </LoaderWrapper>
      ) : (
        <CardWrapper>
          {housingData.map((housing) => (
            <CardHousing
              key={housing.id}
              url={`/housing/${housing.id}`}
              title={housing.title}
              alt={`${housing.title} - ${housing.location}`}
              cover={housing.cover}
            />
          ))}
        </CardWrapper>
      )}
    </main>
  );
}

export default Home;
