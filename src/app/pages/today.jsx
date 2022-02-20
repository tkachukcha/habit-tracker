import React from 'react';
import HabitList from '../components/ui/habitList';
import PageTitle from '../components/common/pageTitle';

const Today = () => {
  return (
    <>
      <div className="container mt-2 p-0">
        <div className="row">
          <div className="col mb-4">
            <PageTitle title="Today" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <HabitList />
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </>
  );
};

export default Today;
