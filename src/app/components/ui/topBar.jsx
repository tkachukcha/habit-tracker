import React, { useState } from 'react';
import OffCanvasMenu from './offCanvasMenu';
import Logo from '../common/logo';

const TopBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="navbar navbar-dark bg-dark d-flex flex-row d-lg-none border-bottom border-altdark p-3 shadow-sm">
      <Logo />
      <button className="navbar-toggler btn" type="button" onClick={handleShow}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <OffCanvasMenu show={show} onHide={handleClose} />
    </div>
  );
};

export default TopBar;
