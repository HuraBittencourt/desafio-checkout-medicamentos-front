import React from 'react';
import { Col, Image } from 'react-bootstrap';

const NearPharmacy = ({ image, name, distance, totalPrice }) => {
  return (
    <>
      <Col xs={{ span: 1, offset: 1 }} className="d-flex justify-content-center">
        <Image className="m-auto" style={{ width: '28px' }} src={image}></Image>
      </Col>
      <Col xs={10}>
        <h3>{name} (a {distance} metros)</h3>
        <p>Total: R$ {totalPrice}</p>
      </Col>
    </>
  );
}

export default NearPharmacy;
