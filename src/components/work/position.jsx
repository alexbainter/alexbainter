import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../utils/format-date';
import stringifySkills from '../utils/stringify-skills';

const formatDateRange = (startDate, endDate) =>
  `${formatDate(startDate)} - ${endDate ? formatDate(endDate) : 'Now'}`;

const Position = ({
  _id,
  name,
  company,
  startDate,
  endDate,
  description,
  skills,
  linkURL,
}) => (
  <div key={_id} className="work-item">
    <h3 className="work-item__header">{name}</h3>
    <h4 className="work-item__header">
      <a href={linkURL}>{company}</a>
    </h4>
    <h5 className="work-item__header">{formatDateRange(startDate, endDate)}</h5>
    <p className="work-item__description">{description}</p>
    <h5>{stringifySkills(skills)}</h5>
    <hr />
  </div>
);

Position.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  linkURL: PropTypes.string.isRequired,
};

export default Position;
