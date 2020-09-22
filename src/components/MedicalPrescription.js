import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Medicines from './Medicines'
import { medicines } from '../constants';


const MedicalPrescription = () => {
  return (
    <div>
      <Row>
        <Col className="align-items-center d-flex flex-column">
          <h1>Dr. Memed</h1>
          <p>Prescrição criada em</p>
        </Col>
      </Row>
      <Medicines medicines={medicines}/>
    </div>
  );
}

export default MedicalPrescription;
