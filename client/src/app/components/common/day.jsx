import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const Day = ({ date, id, isPerfect }) => {
  const day = dayjs(date).date();
  let variant = 'text';
  let disabled = true;
  if (id) {
    variant = isPerfect ? 'contained' : 'outlined';
    disabled = false;
  }
  return (
    <>
      <Button
        component={NavLink}
        to={`/stats/${id}`}
        sx={{
          borderRadius: '9999px',
          minWidth: '30px',
          width: '30px',
          height: '30px',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          m: 1,
          color: '#fff'
        }}
        variant={variant}
        disabled={disabled}
        size="small"
      >
        {day}
      </Button>
    </>
  );
};
Day.propTypes = {
  date: PropTypes.string,
  id: PropTypes.string,
  isPerfect: PropTypes.bool
};

export default Day;
