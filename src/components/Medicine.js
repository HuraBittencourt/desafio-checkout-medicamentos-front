import React from 'react';
import { Col, Image } from 'react-bootstrap';

const Medicine = ({ image, quantity, name, priceItem }) => {
  return (
    <>
      <Col xs={{ span: 1, offset: 1 }} className="d-flex justify-content-center">
        <Image className="m-auto" style={{ width: '28px' }} src={image}></Image>
      </Col>
      <Col xs={10}>
        <p>{quantity} Unidade</p>
        <h4>{name}</h4>
        {priceItem && (
          <h4 className="text-primary">R$ {priceItem}</h4>
        )}
      </Col>
    </>
  );
}

export default Medicine;
