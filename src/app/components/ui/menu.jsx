import React, { useEffect, useState } from 'react';
import MenuLink from '../common/menuLink';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const Menu = ({ onHide }) => {
  return (
    <div className="d-flex flex-column d-grid gap-3">
      <MenuLink path="/" exact={true} onHide={onHide}>
        Today
      </MenuLink>
      <MenuLink path="/habits" onHide={onHide}>
        Habits
      </MenuLink>
      <MenuLink path="/profile" onHide={onHide}>
        Profile
      </MenuLink>
      <MenuLink path="/login" onHide={onHide}>
        Login
      </MenuLink>
    </div>
  );
};
Menu.propTypes = {
  onHide: PropTypes.func
};

export default Menu;
