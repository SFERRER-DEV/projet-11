import React, { useState, useEffect, createContext } from 'react';

export const HousingContext = createContext();

export const HousingProvider = ({ children }) => {
  const [housingData, setHousingData] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchHousing() {
    setDataLoading(true);
    try {
      const response = await fetch(`/data/logements.json`);
      const { data } = await response.json();
      setHousingData(data);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setDataLoading(false);
    }
  }

  // function fetchHousing() {
  //   setDataLoading(true);
  //   fetch(`/data/logements.json`).then((response) =>
  //     response
  //       .json()
  //       .then(({ data }) => {
  //         setHousingData(data);
  //         setDataLoading(false);
  //       })
  //       .catch((error) => {
  //         setError(true);
  //         console.log(error);
  //       })
  //   );
  // }

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
      }}
    >
      {children}
    </HousingContext.Provider>
  );
};
