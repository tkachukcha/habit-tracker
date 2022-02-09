import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenuLink = ({ children, path, onHide }) => {
  return (
    <li className="p-3">
      <Link
        className="text-decoration-none text-warning"
        to={path}
        onClick={onHide}
      >
        {children}
      </Link>
    </li>
  );
};
MenuLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  path: PropTypes.string,
  onHide: PropTypes.func
};

export default MenuLink;
