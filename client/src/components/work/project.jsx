import React from 'react';
import PropTypes from 'prop-types';
import { stringifySkills, formatDate } from './utils';

const Project = ({
  _id,
  linkURL,
  name,
  codeURL,
  startDate,
  description,
  skills,
}) => (
  <div key={_id} className="work-item">
    <h3 className="work-item__header">
      {typeof linkURL === 'string' ? <a href={linkURL}>{name}</a> : name}
    </h3>
    <h4 className="work-item__header">
      <a href={codeURL}>Source Code</a>
    </h4>
    <h5 className="work-item__header">{formatDate(startDate)}</h5>
    <p className="work-item__description">{description}</p>
    <h5>{stringifySkills(skills)}</h5>
    <hr />
  </div>
);

Project.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  codeURL: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
};

export { Project };
