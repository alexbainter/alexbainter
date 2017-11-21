import React from 'react';
import PropTypes from 'prop-types';

const RatingCircle = ({ skillRatingDisplayOrder, rating }) => (
  <div
    className={
      'circle' +
      (skillRatingDisplayOrder >= rating.displayOrder ? ' circle--filled' : '')
    }
    key={rating._id}
  />
);

RatingCircle.propTypes = {
  skillRatingDisplayOrder: PropTypes.number.isRequired,
  rating: PropTypes.object.isRequired,
};

export { RatingCircle };
