import React, { Component } from 'react';
import { sortBy } from 'lodash';
import PropTypes from 'prop-types';
import ratings from 'data/ratings';
import { SkillListItem } from './skill-list-item';

const sortedRatings = sortBy(data.ratings, ['displayOrder']);

const SkillListItemContainer = ({ name, rating }) => (
  <div>
    <SkillListItem name={name} rating={rating} allRatings={sortedRatings} />
  </div>
);

SkillListItemContainer.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.object.isRequired,
};

export default SkillListItemContainer;
