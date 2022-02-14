import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const MenuLink = ({ children, path, onHide, exact }) => {
  return (
    <NavLink
      exact={exact}
      className="btn btn-outline-secondary"
      activeClassName="btn btn-secondary text-dark"
      to={path}
      onClick={onHide}
    >
      {children}
    </NavLink>
  );
};
MenuLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  path: PropTypes.string,
  onHide: PropTypes.func,
  exact: PropTypes.bool
};

export default MenuLink;
