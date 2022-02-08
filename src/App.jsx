import React, { useState } from 'react';
import { Offcanvas, Button, Container, Col, Row } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import Today from './app/layouts/today';
import Login from './app/layouts/login';
import Habits from './app/layouts/habits';
import NavBar from './app/components/ui/navBar';

import './App.scss';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col className="p-3">
            <Switch>
              <Route path="/login/:type?" component={Login} />
              <Route path="/habits/:habitID?/:edit?" component={Habits} />
              <Route path="/:edit?" exact component={Today} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
