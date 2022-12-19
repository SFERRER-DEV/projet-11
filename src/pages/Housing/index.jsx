import { useState, useEffect, useContext } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
// import { Loader } from '../../utils/style/Atoms'
import { HousingContext } from '../../utils/context';

function Housing() {
  const { housingData } = useContext(HousingContext);
  // L'identifiant du logement est spécifié dans la route
  const { housingId } = useParams();
  // Recherche de l'annonce avec l'identifiant qui se trouve dans l'URL.
  const found = housingData.find((housing) => housing.id === housingId);
  if (!found) {
    return <Redirect to="/NotFoundPage" />;
  }

  return (
    <div>
      <h1>Logements : {housingData.length}</h1>
    </div>
  );
}

export default Housing;
