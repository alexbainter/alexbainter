import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortBy } from 'lodash';
import PropTypes from 'prop-types';
import { SkillListItem } from './skill-list-item';

const SkillListItemContainer = ({ name, rating, ratings }) => (
  <div>
    <SkillListItem name={name} rating={rating} allRatings={ratings} />
  </div>
);

SkillListItemContainer.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.object.isRequired,
};

const mapStateToProps = ({ data }) => ({
  ratings: sortBy(data.ratings, ['displayOrder']),
});

const connectedSkillListItemContainer = connect(mapStateToProps)(
  SkillListItemContainer
);

export { connectedSkillListItemContainer as SkillListItemContainer };
