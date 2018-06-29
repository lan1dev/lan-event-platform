import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuList from './MenuList';

const propTypes = {
  items: PropTypes.arrayOf({ name: PropTypes.string, href: PropTypes.string }).isRequired
};

const Menu = ({ items }) => (
  <Fragment>
    <MenuList>
      {items.map(item => (
        <li key={item.href}>
          <Link to={item.href}>{item.name}</Link>
        </li>
      ))}
    </MenuList>
  </Fragment>
);

Menu.propTypes = propTypes;

export default Menu;
