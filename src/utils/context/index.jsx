import React, { useState, useEffect, createContext } from 'react';

export const HousingContext = createContext();

export const HousingProvider = ({ children }) => {
  const [housingData, setHousingData] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchHousing() {
      setDataLoading(true);
      try {
        console.log(`Context 1: ${isDataLoading}`);
        const response = await fetch(`/data/logements.json`);
        const { housingData } = await response.json();
        setHousingData(housingData);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setDataLoading(false);
        console.log(`Context 2: ${isDataLoading}`);
      }
    }
    fetchHousing();
  }, []);

  return (
    <HousingContext.Provider value={{ housingData, isDataLoading, error }}>
      {children}
    </HousingContext.Provider>
  );
};
