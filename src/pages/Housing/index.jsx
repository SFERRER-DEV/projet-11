import React, { useContext, useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { HousingContext } from '../../utils/context';
import Carousel from '../../components/Carousel';
import Accomodation from '../../components/Accomodation';
import { LoaderWrapper, LoaderHourGlass } from '../../utils/style/Atoms';
/** @typedef {import('../../utils/context/typedef').AccomodationJSON} AccomodationJSON Les types des données JSON d'une annonce */

/**
 * Un composant Housing pour afficher une annonce avec son diaporama et ses informations de texte détaillées
 * @returns {JSX.Element} Un composant Housing
 */
function Housing() {
  /** @typedef {Object} params
   * @property {string} housingId Identifiant d'une annonce obtenu depuis la route
   */
  /** @type {params} */
  const { housingId } = useParams();

  /**
   * @typedef {Object} contextData
   * @property {boolean} isDataLoading Les données sont-elle entrain de se charger ?
   * @property {Array.<AccomodationJSON>} housingData Un tableau d'objets JSON pour les annonces
   * @property {boolean} error Est-ce qu'une erreur est survenue lors du chargement ?
   */
  /** @type {contextData} */
  const { isDataLoading, housingData, error } = useContext(HousingContext);

  /** @type {[AccomodationJSON, Function]} */
  const [accomodation, setAccomodation] = useState({});

  /**
   * @typedef {boolean} isError404 Est-ce que l'annonce a-été-trouvée par son identifiant dans le tableau ?
   */
  const [/** @type {isError404}*/ isError404, setError404] = useState(false);

  /**
   * @typedef {number} seconds Nombre de seconde(s) à attendre
   */
  const [
    /** @type {seconds} */
    seconds,
    setSeconds,
  ] = useState(1); // 1s
  /**
   * Temporiser avant d'afficher l'annonce pour voir le sablier
   */
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  /**
   * Rechercher l'annonce dans le contexte de données avec l'identifiant qui se trouve dans la route
   */
  useEffect(() => {
    /**
     * Rechercher une annonce dans le tableau des annonces par son identifiant
     * @param {string} housingId Identifiant recherché d'une annonce
     * @returns {?AccomodationJSON} Une annonce dans un objet au format JSON
     */
    const findAccomodation = (housingId) => {
      return housingData.find((housing) => housing.id === housingId);
    };
    // Vérifier que les annonces sont dans le tableau
    if (housingData.length > 0) {
      const found = findAccomodation(housingId);
      // Vérifier qu'une annonce a été trouvée
      if (found !== undefined && Object.keys(found).length > 0) {
        setAccomodation(found);
      } else {
        setError404(true);
        setSeconds(0);
      }
    }
  }, [housingData, housingId, isDataLoading]);

  if (error) {
    return (
      <div style={{ fontSize: '2em', margin: '2em 0', padding: '1em' }}>
        Oups il y a eu un problème
      </div>
    );
  }

  return isDataLoading || seconds > 0 ? (
    <LoaderWrapper>
      <LoaderHourGlass />
    </LoaderWrapper>
  ) : Object.keys(accomodation).length > 0 ? (
    <main>
      <Carousel title={accomodation.title} photos={accomodation.pictures} />
      <Accomodation
        title={accomodation.title}
        location={accomodation.location}
        name={accomodation.host.name}
        picture={accomodation.host.picture}
        description={accomodation.description}
        tags={accomodation.tags}
        equipments={accomodation.equipments}
        rating={
          isNaN(parseInt(accomodation.rating))
            ? 0
            : parseInt(accomodation.rating)
        }
      />
    </main>
  ) : isError404 ? (
    <Redirect to="/NotFoundPage" />
  ) : null;
}

export default Housing;
