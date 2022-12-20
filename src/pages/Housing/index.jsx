import React, { useContext, useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { HousingContext } from '../../utils/context';
import Carousel from '../../components/Carousel';
import Accomodation from '../../components/Accomodation';
import { Loader } from '../../utils/style/Atoms';

const LoaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  height: 15em;
`;

function Housing() {
  // L'identifiant du logement est spécifié dans la route
  const { housingId } = useParams();
  const { isDataLoading, housingData } = useContext(HousingContext);
  const [accomodation, setAccomodation] = useState({});
  const [isError404, setError404] = useState(false);

  // Recherche de l'annonce avec l'identifiant qui se trouve dans l'URL.
  const findAccomodation = (housingId) => {
    return housingData.find((housing) => housing.id === housingId);
  };

  useEffect(() => {
    if (housingData.length > 0) {
      const found = findAccomodation(housingId);
      if (found !== undefined && Object.keys(found).length > 0) {
        setAccomodation(found);
      } else {
        setError404(true);
      }
    }
  }, [isDataLoading]);

  return (
    <section>
      {isDataLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : Object.keys(accomodation).length > 0 ? (
        <div>
          <Carousel
            title={accomodation.host.name}
            photos={accomodation.pictures}
          />
          <Accomodation name={accomodation.host.name} />
        </div>
      ) : isError404 ? (
        <Redirect to="/NotFoundPage" />
      ) : null}
    </section>
  );
}

export default Housing;
