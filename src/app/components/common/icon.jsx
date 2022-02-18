import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon, color, inList }) => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={inList && { width: '100px', padding: '5px' }}
    >
      <div className="mb-1" style={color && { color: color }}>
        {icon.component}
      </div>
      {inList && <span>{icon.name}</span>}
    </div>
  );
};
Icon.defaultProps = {
  color: 'white'
};

Icon.propTypes = {
  icon: PropTypes.object,
  color: PropTypes.string,
  inList: PropTypes.bool
};

export default Icon;
