import React from 'react';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import BestPharmacy from './pages/BestPharmacy';
const Routes = () => {
  return (
    <Switch>
      <Container classNam="fuild p-0">
        <Route path="/" exact component={Home} />
        <Route path="/find-pharmacy" exact component={BestPharmacy} />
      </Container>
    </Switch>
  );
};

export default Routes;
