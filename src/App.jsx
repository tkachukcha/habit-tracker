import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import Today from './app/pages/today';
import Login from './app/pages/login';
import Habits from './app/pages/habits';
import TopBar from './app/components/ui/topBar';
import Profile from './app/pages/profile';
import './App.scss';
import Sidebar from './app/components/ui/sidebar';
import { IconContext } from 'react-icons';

function App() {
  return (
    <>
      <IconContext.Provider value={{ size: '3rem', color: 'white' }}>
        <TopBar className="d-lg-none" />
        <Container fluid className="bg-dark min-vh-100 text-light">
          <Row>
            <Col
              lg={3}
              xxl={2}
              className="d-none d-lg-block vh-100 border-end border-altdark shadow-sm py-2 px-3"
            >
              <Sidebar />
            </Col>
            <Col lg={9} xxl={10} className="py-2 px-3">
              <Switch>
                <Route path="/login/:type?" component={Login} />
                <Route path="/profile" component={Profile} />
                <Route path="/habits/:habitID?/:edit?" component={Habits} />
                <Route path="/" exact component={Today} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </IconContext.Provider>
    </>
  );
}

export default App;
