import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';

const PageTitle = ({ title }) => {
  return <h1 className="text-light h2">{title}</h1>;
};
PageTitle.propTypes = {
  title: PropTypes.string
};

export default PageTitle;
