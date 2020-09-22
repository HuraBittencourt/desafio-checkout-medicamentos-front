import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { getBestPharmacy } from '../actions/pharmacy';
import HeaderGoBack from '../components/HeaderGoBack';
import Medicines from '../components/Medicines';
import NearPharmacy from '../components/NearPharmacy';
import { latLon, medicines } from '../constants';
import bandeira from './../brasil.png'

const BestPharmacy = () => {
  const [bestPharmacy, setBestPharmacy] = useState([])

  useEffect(() => {
    const getNearBestPharmacy = () => {
      getBestPharmacy(latLon, medicines, (resp) => setBestPharmacy(resp.data[0]))
    }

    getNearBestPharmacy()
  }, []);

  return (
    <div>
      <HeaderGoBack />
      <Row className="border-bottom border-secondary pt-3 pb-3">
        <NearPharmacy name={bestPharmacy.attributes && bestPharmacy.attributes.nome} image={bandeira} distance={bestPharmacy.distance} totalPrice={bestPharmacy.totalPrice} />
      </Row>
      <Medicines medicines={bestPharmacy.medicamentos} />
    </div>
  );
}

export default BestPharmacy;
