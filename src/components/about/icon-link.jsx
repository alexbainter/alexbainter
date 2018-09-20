import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconLink = ({ href, faIcon }) => (
  <li className="link-container__link">
    <a href={href}>
      <FontAwesomeIcon icon={faIcon} />
    </a>
  </li>
);

IconLink.propTypes = {
  href: PropTypes.string.isRequired,
  faIcon: PropTypes.object.isRequired,
};

export default IconLink;
