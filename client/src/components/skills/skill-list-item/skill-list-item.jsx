import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RatingCircle } from './rating-circle';

const makeRenderCircle = skillDisplayOrder => rating => (
  <RatingCircle
    skillRatingDisplayOrder={skillDisplayOrder}
    rating={rating}
    key={rating._id}
  />
);

const SkillListItem = ({ name, rating, allRatings }) => (
  <li className="skills-list__item">
    {name}
    <div className="circle-container">
      {allRatings.map(makeRenderCircle(rating.displayOrder))}
      <div className="circle-container__tip">{rating.description}</div>
    </div>
  </li>
);

SkillListItem.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.object.isRequired,
  allRatings: PropTypes.array.isRequired,
};

export { SkillListItem };
