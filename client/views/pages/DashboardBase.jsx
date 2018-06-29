import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../common/Layout';
import Main from '../common/Main';
import Footer from '../common/Footer';
import Sidebar from '../components/Sidebar';
import Header from '../common/Header';

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
      <Header />
      <Main>{children}</Main>
      <Footer>LAN Platform ©2018</Footer>
    </Layout>
  </Layout>
);

DashboardBase.propTypes = propTypes;
DashboardBase.defaultProps = defaultProps;

export default DashboardBase;
