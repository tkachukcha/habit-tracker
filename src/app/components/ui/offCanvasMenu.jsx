import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import MenuLink from '../common/menuLink';
import PropTypes from 'prop-types';

const OffCanvasMenu = ({ show, onHide, topBarHeight }) => {
  return (
    <Offcanvas className="border border-dark" show={show} onHide={onHide}>
      <Offcanvas.Header
        className="bg-dark"
        closeButton
        closeVariant="white"
        style={{ height: topBarHeight }}
      >
        <Offcanvas.Title className="text-light">Habit Tracker</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-0 bg-dark">
        <ul className="d-flex flex-column nav nav-light">
          <MenuLink path="/" onHide={onHide}>
            Today
          </MenuLink>
          <MenuLink path="/habits" onHide={onHide}>
            Habits
          </MenuLink>
          <MenuLink path="/profile" onHide={onHide}>
            Profile
          </MenuLink>
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
OffCanvasMenu.propTypes = {
  topBarHeight: PropTypes.string,
  show: PropTypes.bool,
  onHide: PropTypes.func
};

export default OffCanvasMenu;
