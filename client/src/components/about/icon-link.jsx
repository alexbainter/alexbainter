import React from 'react';
import PropTypes from 'prop-types';

const IconLink = ({ href, faIcon }) => (
  <li className="link-container__link">
    <a href={href}>
      <i className={`fa ${faIcon}`} />
    </a>
  </li>
);

IconLink.propTypes = {
  href: PropTypes.string.isRequired,
  faIcon: PropTypes.string.isRequired,
};

export { IconLink };
