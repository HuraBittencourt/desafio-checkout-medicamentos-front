import React from 'react';
import { Row } from 'react-bootstrap';
import Medicine from './Medicine'
import medicineImage from './../medicamento.png'

const Medicines = ({ medicines }) => {
  const quantity = () => Math.floor(Math.random(2, 10) * 10).toFixed()

  return (
    <div>
      { medicines &&
        medicines.map((item, index) =>
          <Row key={index} className="border-bottom border-light pb-3 pt-3">
            <Medicine image={medicineImage} quantity={quantity()} name={item.nome || item} priceItem={item.preco || undefined} />
          </Row>
        )
      }
    </div>
  );
}

export default Medicines;
