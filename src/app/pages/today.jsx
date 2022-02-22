import React from 'react';
import HabitList from '../components/ui/habitList';
import PageTitle from '../components/common/pageTitle';

const Today = () => {
  return (
    <>
      <PageTitle title="Today" />
      <HabitList />
    </>
  );
};

export default Today;
