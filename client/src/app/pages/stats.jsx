import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../components/common/pageTitle';
import Calendar from '../components/ui/calendar';

const Stats = () => {
  const { id } = useParams();
  if (id) {
    return <h1>Day</h1>;
  }

  return <Calendar />;
};

export default Stats;
