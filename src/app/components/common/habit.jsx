import React from 'react';
import { Card } from 'react-bootstrap';
import HabitName from './habitName';
import PropTypes from 'prop-types';
import Icon from './icon';
import { icons } from '../../utils/icons';

const Habit = ({ title, icon, streak, finished, color }) => {
  return (
    <Card>
      <Card.Body className="d-flex align-items-center bg-dark p-2">
        <div>{icon && <Icon icon={icon} color={color} />}</div>
        <div className="p-2">
          <HabitName title={title} />
          <div>{streak}-day streak</div>
        </div>
      </Card.Body>
    </Card>
  );
};
Habit.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.object,
  streak: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  finished: PropTypes.bool
};

export default Habit;
