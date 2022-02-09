import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import Today from './app/layouts/today';
import Login from './app/layouts/login';
import Habits from './app/layouts/habits';
import TopBar from './app/components/ui/topBar';
import Profile from './app/layouts/profile';

import './App.scss';

function App() {
  const topBarHeight = '4rem';
  return (
    <>
      <TopBar height={topBarHeight} />
      <Container
        className="p-3 bg-dark"
        style={{ marginTop: topBarHeight, minHeight: '100vh' }}
      >
        <Switch>
          <Route path="/login/:type?" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/habits/:habitID?/:edit?" component={Habits} />
          <Route path="/:edit?" exact component={Today} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
