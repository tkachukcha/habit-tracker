import React from 'react';
import { Card } from 'react-bootstrap';
import HabitName from './habitName';
import PropTypes from 'prop-types';
import { icons } from '../../utils/icons';

const Habit = ({ title, icon, streak, finished }) => {
  console.log(icons);
  return (
    <Card className="my-3">
      <Card.Body className="d-flex bg-dark">
        <div>{icons.meditate.component}</div>
        <div>
          <HabitName />
          <div>5-day streak</div>
        </div>
      </Card.Body>
    </Card>
  );
};
Habit.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  streak: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  finished: PropTypes.bool
};

export default Habit;
