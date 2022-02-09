import React, { useState } from 'react';
import OffCanvasMenu from './offCanvasMenu';
import PropTypes from 'prop-types';

const TopBar = ({ title, height }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        style={{ height: height }}
        className="navbar navbar-dark bg-dark fixed-top py-2 px-3 d-flex flex-row"
      >
        <h1 className="text-light">{title}</h1>
        <button
          className="navbar-toggler btn"
          type="button"
          onClick={handleShow}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <OffCanvasMenu show={show} onHide={handleClose} topBarHeight={height} />
      </div>
    </>
  );
};
TopBar.propTypes = {
  title: PropTypes.string,
  height: PropTypes.string
};

export default TopBar;
