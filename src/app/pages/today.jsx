import React from 'react';
import { Card } from 'react-bootstrap';
import Habit from '../components/common/habit';
import PageTitle from '../components/common/pageTitle';

const Today = () => {
  return (
    <>
      <div className="mb-4">
        <PageTitle title="Today" />
      </div>
      <div className="d-flex justify-content-between">
        <div className="p-2 w-50">
          <Card className="">
            <Card.Body className="bg-dark">
              <Habit />
              <Habit />
              <Habit />
              <Habit />
              <Habit />
              <Habit />
            </Card.Body>
          </Card>
        </div>
        <div className="p-2 w-50">
          <Card className="">
            <Card.Body className="bg-dark"></Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Today;
