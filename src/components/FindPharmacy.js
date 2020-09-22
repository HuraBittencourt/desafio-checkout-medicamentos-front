import React from 'react';
import { Button } from 'react-bootstrap';

const FindPharmacy = () => {
  return (
    <>
      <Button style={{position: 'fixed', bottom: 0, left: 0, width: '100%'}} onClick={() => window.location.href = '/find-pharmacy'}>
      <h2>
        Encontrar Farmácia
      </h2>
      <p>Serviço oferecido por Memed</p>
    </Button>
    </>
  );
}

export default FindPharmacy;
