import React, { useState, useEffect, createContext } from 'react';
/** @typedef {import('../../utils/context/typedef').AccomodationJSON} AccomodationJSON Raccourci pour importer les types des données JSON d'une annonce*/

export const HousingContext = createContext();

export const HousingProvider = ({ children }) => {
  /** @type {[AccomodationJSON, Function]} */
  const [housingData, setHousingData] = useState([]);
  /**
   * @typedef {boolean} isDataLoading Ees données sont-elle entrain de se charger ?
   */
  const [/** @type {isDataLoading} */ isDataLoading, setDataLoading] =
    useState(false);

  /**
   * @typedef {boolean} error Est-ce qu'une erreur est survenue lors du chargement ?
   */
  const [/** @type {error} */ error, setError] = useState(false);

  /**
   * Charger les données JSON du fichier des annonces de logements
   */
  async function fetchHousing() {
    setDataLoading(true);
    try {
      const response = await fetch(`/data/logements.json`);
      const data = await response.json();
      setHousingData(data);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setDataLoading(false);
    }
  }

  useEffect(() => {
    fetchHousing();
  }, []);

  return (
    <HousingContext.Provider
      value={{
        housingData,
        setHousingData,
        isDataLoading,
        error,
        setError,
      }}
    >
      {children}
    </HousingContext.Provider>
  );
};
