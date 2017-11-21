import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const CustomNavLink = ({ to, className, activeClassName, text }) => (
  <NavLink
    to={to}
    className={className}
    activeClassName={activeClassName}
    exact
  >
    {text}
  </NavLink>
);

CustomNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  activeClassName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export { CustomNavLink };
