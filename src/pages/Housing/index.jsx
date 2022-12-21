import React, { useContext, useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import styled from 'styled-components';
//import colors from '../../utils/style/colors';
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

  useEffect(() => {
    // Recherche de l'annonce avec l'identifiant qui se trouve dans l'URL.
    const findAccomodation = (housingId) => {
      return housingData.find((housing) => housing.id === housingId);
    };
    if (housingData.length > 0) {
      const found = findAccomodation(housingId);
      if (found !== undefined && Object.keys(found).length > 0) {
        setAccomodation(found);
      } else {
        setError404(true);
      }
    }
  }, [housingData, housingId, isDataLoading]);

  return isDataLoading ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : Object.keys(accomodation).length > 0 ? (
    <main>
      <Carousel title={accomodation.host.name} photos={accomodation.pictures} />
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
