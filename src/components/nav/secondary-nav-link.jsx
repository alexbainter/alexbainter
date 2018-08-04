import React from 'react';
import CustomNavLink from './custom-nav-link';
import PropTypes from 'prop-types';

const SecondaryNavLink = ({ text }) => (
  <CustomNavLink
    to={typeof to === 'string' ? to : `/${text}`}
    text={text}
    className="nav__link"
    activeClassName="nav__link--active"
  />
);

SecondaryNavLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default SecondaryNavLink;
