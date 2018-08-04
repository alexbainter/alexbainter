import React from 'react';
import PropTypes from 'prop-types';

const RatingCircle = ({ skillRatingDisplayOrder, ratingDisplayOrder }) => (
  <div
    className={
      'circle' +
      (skillRatingDisplayOrder >= ratingDisplayOrder ? ' circle--filled' : '')
    }
  />
);

RatingCircle.propTypes = {
  skillRatingDisplayOrder: PropTypes.number.isRequired,
  ratingDisplayOrder: PropTypes.number.isRequired,
};

export default RatingCircle;
