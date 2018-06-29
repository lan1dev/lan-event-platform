import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MenuList from './MenuList';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, href: PropTypes.string }))
    .isRequired
};

const Menu = ({ items }) => (
  <Fragment>
    <MenuList>
      {items.map(item => (
        <li>
          <Link to={item.href}>{item.name}</Link>
        </li>
      ))}
    </MenuList>
  </Fragment>
);

Menu.propTypes = propTypes;

export default Menu;
