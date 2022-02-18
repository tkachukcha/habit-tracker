import React from 'react';
import { Card } from 'react-bootstrap';
import HabitList from '../components/ui/habitList';
import PageTitle from '../components/common/pageTitle';
import IconsList from '../components/ui/iconsList';

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
              <HabitList />
            </Card.Body>
          </Card>
        </div>
        <div className="p-2 w-50">
          <Card className="">
            <Card.Body className="bg-dark">
              <IconsList />
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Today;
