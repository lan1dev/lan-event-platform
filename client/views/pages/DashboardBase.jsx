import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const defaultProps = {
  children: 'page'
};

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

/**
 * Used as Base for logged in Dashboard pages.
 * @param {component} children Child components, which will be the content of the page.
 */
const DashboardBase = ({ children }) => (
  <Layout sidebar>
    <Sidebar />
    <Layout>
      <Header primary />
      <Main>{children}</Main>
      <Footer>LAN Platform ©2018</Footer>
    </Layout>
  </Layout>
);

DashboardBase.propTypes = propTypes;
DashboardBase.defaultProps = defaultProps;

export default DashboardBase;
