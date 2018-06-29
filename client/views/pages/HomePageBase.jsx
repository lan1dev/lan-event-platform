import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

import Footer from '../common/Footer';

const defaultProps = {
  children: 'page'
};

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

const HomePageBase = ({ children }) => (
  <Fragment>
    <Header />
    {children}
    <Footer>LAN Platform ©2018</Footer>
  </Fragment>
);

HomePageBase.defaultProps = defaultProps;
HomePageBase.propTypes = propTypes;

export default HomePageBase;
