import React from 'react';
import { Col, Image } from 'react-bootstrap';
import icon from './../left-arrow.png';
const HeaderGoBack = () => {
  return (
    <div class="d-flex align-items-center card-header">
      <Col xs={1}>
        <Image src={icon} style={{cursor: 'pointer'}} onClick={() => window.location.href = '/'}/>
      </Col>
      <Col xs={11}>
        <h3>Encontrar Farmácia</h3>
        Serviço oferecido por Memed
      </Col>
    </div>
  );
}

export default HeaderGoBack;
